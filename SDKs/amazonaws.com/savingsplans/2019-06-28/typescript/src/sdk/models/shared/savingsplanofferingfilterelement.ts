import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SavingsPlanOfferingFilterAttributeEnum } from "./savingsplanofferingfilterattributeenum";


// SavingsPlanOfferingFilterElement
/** 
 * Information about a filter.
**/
export class SavingsPlanOfferingFilterElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: SavingsPlanOfferingFilterAttributeEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
