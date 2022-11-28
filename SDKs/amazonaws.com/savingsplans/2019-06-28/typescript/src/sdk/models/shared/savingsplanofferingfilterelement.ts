import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanOfferingFilterAttributeEnum } from "./savingsplanofferingfilterattributeenum";



// SavingsPlanOfferingFilterElement
/** 
 * Information about a filter.
**/
export class SavingsPlanOfferingFilterElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SavingsPlanOfferingFilterAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
