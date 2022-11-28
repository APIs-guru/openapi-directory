import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesRepProcessBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BatchItemSaleRepsDto })
  request: shared.BatchItemSaleRepsDto[];
}


export class SalesRepProcessBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesRepProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
