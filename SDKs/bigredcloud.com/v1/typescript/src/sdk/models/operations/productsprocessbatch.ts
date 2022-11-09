import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductsProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemProductDto })
  request: shared.BatchItemProductDto[];
}


export class ProductsProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
