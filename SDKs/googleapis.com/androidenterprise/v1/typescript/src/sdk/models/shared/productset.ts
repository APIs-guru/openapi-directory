import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductVisibility } from "./productvisibility";


export enum ProductSetProductSetBehaviorEnum {
    Unknown = "unknown",
    Whitelist = "whitelist",
    IncludeAll = "includeAll",
    AllApproved = "allApproved"
}


// ProductSet
/** 
 * A set of products.
**/
export class ProductSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string[];

  @SpeakeasyMetadata({ data: "json, name=productSetBehavior" })
  productSetBehavior?: ProductSetProductSetBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=productVisibility", elemType: ProductVisibility })
  productVisibility?: ProductVisibility[];
}
