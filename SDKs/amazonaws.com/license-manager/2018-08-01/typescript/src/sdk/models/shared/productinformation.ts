import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductInformationFilter } from "./productinformationfilter";


// ProductInformation
/** 
 * Describes product information for a license configuration.
**/
export class ProductInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductInformationFilterList", elemType: shared.ProductInformationFilter })
  productInformationFilterList: ProductInformationFilter[];

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;
}
