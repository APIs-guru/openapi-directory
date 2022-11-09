import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesEntriesPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesEntriesPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesEntriesPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesEntryDto;
}


export class SalesEntriesPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesEntriesPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
