import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesEntriesProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemSalesEntryDto })
  request: shared.BatchItemSalesEntryDto[];
}


export class SalesEntriesProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesEntriesProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
