import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
**/
export declare class CriteriaTargeting extends SpeakeasyBase {
    excludedCriteriaIds?: string[];
    targetedCriteriaIds?: string[];
}
