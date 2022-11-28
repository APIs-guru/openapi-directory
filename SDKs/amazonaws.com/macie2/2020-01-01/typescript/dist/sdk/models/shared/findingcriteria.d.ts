import { SpeakeasyBase } from "../../../internal/utils";
import { CriterionAdditionalProperties } from "./criterionadditionalproperties";
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export declare class FindingCriteria extends SpeakeasyBase {
    criterion?: Map<string, CriterionAdditionalProperties>;
}
