import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BinLookupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bin" })
  bin: string;
}


export class BinLookupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;
}


export class BinLookupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BinLookupPathParams;

  @Metadata()
  queryParams: BinLookupQueryParams;
}


export class BinLookupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ResponseItem })
  responseItems?: shared.ResponseItem[];

  @Metadata()
  statusCode: number;
}
