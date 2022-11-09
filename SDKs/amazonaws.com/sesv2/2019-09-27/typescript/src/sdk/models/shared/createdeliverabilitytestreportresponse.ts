import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliverabilityTestStatusEnum } from "./deliverabilityteststatusenum";


// CreateDeliverabilityTestReportResponse
/** 
 * Information about the predictive inbox placement test that you created.
**/
export class CreateDeliverabilityTestReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliverabilityTestStatus" })
  deliverabilityTestStatus: DeliverabilityTestStatusEnum;

  @Metadata({ data: "json, name=ReportId" })
  reportId: string;
}
