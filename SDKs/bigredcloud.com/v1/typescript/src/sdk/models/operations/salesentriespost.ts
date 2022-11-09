import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesEntriesPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesEntryDto;
}


export class SalesEntriesPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesEntriesPost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
