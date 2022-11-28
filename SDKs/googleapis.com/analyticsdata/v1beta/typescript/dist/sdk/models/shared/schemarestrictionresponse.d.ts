import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveMetricRestriction } from "./activemetricrestriction";
/**
 * The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
**/
export declare class SchemaRestrictionResponse extends SpeakeasyBase {
    activeMetricRestrictions?: ActiveMetricRestriction[];
}
