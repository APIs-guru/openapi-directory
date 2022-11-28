import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ProductModelHaljson })
  productModelHaljsons?: shared.ProductModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.ProductModel })
  productModels?: shared.ProductModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
