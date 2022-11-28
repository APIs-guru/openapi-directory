import { SpeakeasyBase } from "../../../internal/utils";
import { SelectionRule } from "./selectionrule";
/**
 * This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
**/
export declare class CampaignCriterion extends SpeakeasyBase {
    autoSelectFutureInventory?: boolean;
    criterionType?: string;
    selectionRules?: SelectionRule[];
}
