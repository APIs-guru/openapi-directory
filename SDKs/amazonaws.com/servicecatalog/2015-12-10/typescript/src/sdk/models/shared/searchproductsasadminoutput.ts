import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewDetail } from "./productviewdetail";



export class SearchProductsAsAdminOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductViewDetails", elemType: ProductViewDetail })
  productViewDetails?: ProductViewDetail[];
}
