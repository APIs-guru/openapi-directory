import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesRepProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemSaleRepsDto })
  request: shared.BatchItemSaleRepsDto[];
}


export class SalesRepProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesRepProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
