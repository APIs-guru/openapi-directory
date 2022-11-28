import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.
**/
export declare class Cohort extends SpeakeasyBase {
    dateRange?: DateRange;
    dimension?: string;
    name?: string;
}
