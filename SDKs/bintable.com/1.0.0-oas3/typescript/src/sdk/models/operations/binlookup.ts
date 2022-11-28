import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BinLookupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bin" })
  bin: string;
}


export class BinLookupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;
}


export class BinLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BinLookupPathParams;

  @SpeakeasyMetadata()
  queryParams: BinLookupQueryParams;
}


export class BinLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ResponseItem })
  responseItems?: shared.ResponseItem[];

  @SpeakeasyMetadata()
  statusCode: number;
}
