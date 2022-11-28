import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanRateFilterNameEnum } from "./savingsplanratefilternameenum";



// SavingsPlanRateFilter
/** 
 * Information about a filter.
**/
export class SavingsPlanRateFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SavingsPlanRateFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
