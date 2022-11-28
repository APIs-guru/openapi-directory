import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestStatusEnum } from "./deliverabilityteststatusenum";



// CreateDeliverabilityTestReportResponse
/** 
 * Information about the predictive inbox placement test that you created.
**/
export class CreateDeliverabilityTestReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliverabilityTestStatus" })
  deliverabilityTestStatus: DeliverabilityTestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ReportId" })
  reportId: string;
}
