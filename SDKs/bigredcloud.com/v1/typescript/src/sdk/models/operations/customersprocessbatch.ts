import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomersProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemCustomerDto })
  request: shared.BatchItemCustomerDto[];
}


export class CustomersProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customersProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
