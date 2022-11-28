import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlansFilterNameEnum } from "./savingsplansfilternameenum";



// SavingsPlanFilter
/** 
 * Information about a filter.
**/
export class SavingsPlanFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SavingsPlansFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
