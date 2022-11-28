import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestStatusEnum } from "./deliverabilityteststatusenum";



// DeliverabilityTestReport
/** 
 * An object that contains metadata related to a predictive inbox placement test.
**/
export class DeliverabilityTestReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeliverabilityTestStatus" })
  deliverabilityTestStatus?: DeliverabilityTestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportId" })
  reportId?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportName" })
  reportName?: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;
}
