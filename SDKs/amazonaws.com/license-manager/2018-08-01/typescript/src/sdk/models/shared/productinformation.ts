import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductInformationFilter } from "./productinformationfilter";



// ProductInformation
/** 
 * Describes product information for a license configuration.
**/
export class ProductInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductInformationFilterList", elemType: ProductInformationFilter })
  productInformationFilterList: ProductInformationFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;
}
