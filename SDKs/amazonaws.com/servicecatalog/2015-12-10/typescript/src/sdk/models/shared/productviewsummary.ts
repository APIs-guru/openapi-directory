import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductTypeEnum } from "./producttypeenum";


// ProductViewSummary
/** 
 * Summary information about a product view.
**/
export class ProductViewSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Distributor" })
  distributor?: string;

  @Metadata({ data: "json, name=HasDefaultPath" })
  hasDefaultPath?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=SupportDescription" })
  supportDescription?: string;

  @Metadata({ data: "json, name=SupportEmail" })
  supportEmail?: string;

  @Metadata({ data: "json, name=SupportUrl" })
  supportUrl?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ProductTypeEnum;
}
