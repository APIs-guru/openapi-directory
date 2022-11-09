import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SavingsPlansFilterNameEnum } from "./savingsplansfilternameenum";


// SavingsPlanFilter
/** 
 * Information about a filter.
**/
export class SavingsPlanFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: SavingsPlansFilterNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
