import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductVisibility } from "./productvisibility";

export enum ProductSetProductSetBehaviorEnum {
    Unknown = "unknown"
,    Whitelist = "whitelist"
,    IncludeAll = "includeAll"
,    AllApproved = "allApproved"
}


// ProductSet
/** 
 * A set of products.
**/
export class ProductSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=productId" })
  productId?: string[];

  @Metadata({ data: "json, name=productSetBehavior" })
  productSetBehavior?: ProductSetProductSetBehaviorEnum;

  @Metadata({ data: "json, name=productVisibility", elemType: shared.ProductVisibility })
  productVisibility?: ProductVisibility[];
}
