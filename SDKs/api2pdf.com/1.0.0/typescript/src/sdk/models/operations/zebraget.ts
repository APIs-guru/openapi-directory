import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ZebraGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showlabel" })
  showlabel?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class ZebraGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey: shared.SchemeQueryApiKey;
}


export class ZebraGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ZebraGetQueryParams;

  @SpeakeasyMetadata()
  security: ZebraGetSecurity;
}


export class ZebraGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  zebraGet200ImagePngBinaryString?: Uint8Array;
}
