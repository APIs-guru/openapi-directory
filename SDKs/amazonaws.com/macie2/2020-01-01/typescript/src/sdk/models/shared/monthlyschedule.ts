import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonthlySchedule
/** 
 * Specifies a monthly recurrence pattern for running a classification job.
**/
export class MonthlySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: number;
}
