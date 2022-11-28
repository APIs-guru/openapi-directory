import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesEntriesPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesEntriesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesEntriesPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SalesEntryDto;
}


export class SalesEntriesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesEntriesPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
