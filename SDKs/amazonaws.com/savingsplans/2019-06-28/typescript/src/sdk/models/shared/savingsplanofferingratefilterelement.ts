import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SavingsPlanRateFilterAttributeEnum } from "./savingsplanratefilterattributeenum";


// SavingsPlanOfferingRateFilterElement
/** 
 * Information about a filter.
**/
export class SavingsPlanOfferingRateFilterElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: SavingsPlanRateFilterAttributeEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
