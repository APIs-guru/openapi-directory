import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
**/
export declare class CriteriaTargeting extends SpeakeasyBase {
    excludedCriteriaIds?: string[];
    targetedCriteriaIds?: string[];
}
