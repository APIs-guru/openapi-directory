import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductInformationFilter
/** 
 * Describes product information filters.
**/
export class ProductInformationFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductInformationFilterComparator" })
  productInformationFilterComparator: string;

  @SpeakeasyMetadata({ data: "json, name=ProductInformationFilterName" })
  productInformationFilterName: string;

  @SpeakeasyMetadata({ data: "json, name=ProductInformationFilterValue" })
  productInformationFilterValue?: string[];
}
