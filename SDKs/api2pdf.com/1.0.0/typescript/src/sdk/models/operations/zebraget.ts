import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ZebraGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showlabel" })
  showlabel?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=value" })
  value: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class ZebraGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey: shared.SchemeQueryApiKey;
}


export class ZebraGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ZebraGetQueryParams;

  @Metadata()
  security: ZebraGetSecurity;
}


export class ZebraGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  zebraGet200ImagePngBinaryString?: Uint8Array;
}
