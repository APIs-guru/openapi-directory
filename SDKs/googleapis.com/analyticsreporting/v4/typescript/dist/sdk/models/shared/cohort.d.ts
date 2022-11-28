import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
export declare enum CohortTypeEnum {
    UnspecifiedCohortType = "UNSPECIFIED_COHORT_TYPE",
    FirstVisitDate = "FIRST_VISIT_DATE"
}
/**
 * Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.
**/
export declare class Cohort extends SpeakeasyBase {
    dateRange?: DateRange;
    name?: string;
    type?: CohortTypeEnum;
}
