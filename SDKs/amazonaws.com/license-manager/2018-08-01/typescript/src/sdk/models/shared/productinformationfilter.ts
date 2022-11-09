import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductInformationFilter
/** 
 * Describes product information filters.
**/
export class ProductInformationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductInformationFilterComparator" })
  productInformationFilterComparator: string;

  @Metadata({ data: "json, name=ProductInformationFilterName" })
  productInformationFilterName: string;

  @Metadata({ data: "json, name=ProductInformationFilterValue" })
  productInformationFilterValue?: string[];
}
