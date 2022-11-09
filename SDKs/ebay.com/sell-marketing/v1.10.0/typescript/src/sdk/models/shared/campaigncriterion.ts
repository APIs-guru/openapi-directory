import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SelectionRule } from "./selectionrule";


// CampaignCriterion
/** 
 * This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
**/
export class CampaignCriterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoSelectFutureInventory" })
  autoSelectFutureInventory?: boolean;

  @Metadata({ data: "json, name=criterionType" })
  criterionType?: string;

  @Metadata({ data: "json, name=selectionRules", elemType: shared.SelectionRule })
  selectionRules?: SelectionRule[];
}
