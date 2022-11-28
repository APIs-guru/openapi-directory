import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelectionRule } from "./selectionrule";



// CampaignCriterion
/** 
 * This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
**/
export class CampaignCriterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoSelectFutureInventory" })
  autoSelectFutureInventory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=criterionType" })
  criterionType?: string;

  @SpeakeasyMetadata({ data: "json, name=selectionRules", elemType: SelectionRule })
  selectionRules?: SelectionRule[];
}
