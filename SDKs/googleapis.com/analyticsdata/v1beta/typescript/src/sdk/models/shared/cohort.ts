import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";



// Cohort
/** 
 * Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.
**/
export class Cohort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
