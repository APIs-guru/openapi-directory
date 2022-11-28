import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CohortReportSettings
/** 
 * Optional settings of a cohort report.
**/
export class CohortReportSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accumulate" })
  accumulate?: boolean;
}
