import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SavingsPlanRateFilterNameEnum } from "./savingsplanratefilternameenum";


// SavingsPlanRateFilter
/** 
 * Information about a filter.
**/
export class SavingsPlanRateFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: SavingsPlanRateFilterNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
