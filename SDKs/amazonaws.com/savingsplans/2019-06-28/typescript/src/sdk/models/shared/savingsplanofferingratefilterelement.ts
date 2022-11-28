import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanRateFilterAttributeEnum } from "./savingsplanratefilterattributeenum";



// SavingsPlanOfferingRateFilterElement
/** 
 * Information about a filter.
**/
export class SavingsPlanOfferingRateFilterElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SavingsPlanRateFilterAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
