import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CohortReportSettings
/** 
 * Optional settings of a cohort report.
**/
export class CohortReportSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=accumulate" })
  accumulate?: boolean;
}
