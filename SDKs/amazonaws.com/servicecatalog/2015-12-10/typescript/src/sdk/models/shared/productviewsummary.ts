import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductTypeEnum } from "./producttypeenum";



// ProductViewSummary
/** 
 * Summary information about a product view.
**/
export class ProductViewSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Distributor" })
  distributor?: string;

  @SpeakeasyMetadata({ data: "json, name=HasDefaultPath" })
  hasDefaultPath?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportDescription" })
  supportDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportEmail" })
  supportEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportUrl" })
  supportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ProductTypeEnum;
}
