import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CohortReportSettings } from "./cohortreportsettings";
import { Cohort } from "./cohort";
import { CohortsRange } from "./cohortsrange";


// CohortSpec
/** 
 * The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.
**/
export class CohortSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=cohortReportSettings" })
  cohortReportSettings?: CohortReportSettings;

  @Metadata({ data: "json, name=cohorts", elemType: shared.Cohort })
  cohorts?: Cohort[];

  @Metadata({ data: "json, name=cohortsRange" })
  cohortsRange?: CohortsRange;
}
