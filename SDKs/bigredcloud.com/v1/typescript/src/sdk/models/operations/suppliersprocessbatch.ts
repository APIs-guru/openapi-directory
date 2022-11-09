import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuppliersProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemSupplierDto })
  request: shared.BatchItemSupplierDto[];
}


export class SuppliersProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  suppliersProcessBatch200ApplicationJsonObject?: Map<string, any>;
}
