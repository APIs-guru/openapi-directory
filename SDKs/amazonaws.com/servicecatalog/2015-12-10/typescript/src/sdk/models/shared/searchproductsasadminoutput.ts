import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductViewDetail } from "./productviewdetail";


export class SearchProductsAsAdminOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProductViewDetails", elemType: shared.ProductViewDetail })
  productViewDetails?: ProductViewDetail[];
}
