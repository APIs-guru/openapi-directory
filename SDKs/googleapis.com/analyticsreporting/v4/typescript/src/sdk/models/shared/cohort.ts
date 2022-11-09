import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";

export enum CohortTypeEnum {
    UnspecifiedCohortType = "UNSPECIFIED_COHORT_TYPE"
,    FirstVisitDate = "FIRST_VISIT_DATE"
}


// Cohort
/** 
 * Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.
**/
export class Cohort extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: CohortTypeEnum;
}
