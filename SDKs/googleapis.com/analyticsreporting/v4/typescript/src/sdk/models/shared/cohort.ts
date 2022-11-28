import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";


export enum CohortTypeEnum {
    UnspecifiedCohortType = "UNSPECIFIED_COHORT_TYPE",
    FirstVisitDate = "FIRST_VISIT_DATE"
}


// Cohort
/** 
 * Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.
**/
export class Cohort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CohortTypeEnum;
}
