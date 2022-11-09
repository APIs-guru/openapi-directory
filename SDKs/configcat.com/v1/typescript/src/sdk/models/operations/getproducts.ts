import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProductModelHaljson })
  productModelHaljsons?: shared.ProductModelHaljson[];

  @Metadata({ elemType: shared.ProductModel })
  productModels?: shared.ProductModel[];

  @Metadata()
  statusCode: number;
}
