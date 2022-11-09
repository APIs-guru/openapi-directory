import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliverabilityTestStatusEnum } from "./deliverabilityteststatusenum";


// DeliverabilityTestReport
/** 
 * An object that contains metadata related to a predictive inbox placement test.
**/
export class DeliverabilityTestReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=DeliverabilityTestStatus" })
  deliverabilityTestStatus?: DeliverabilityTestStatusEnum;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress?: string;

  @Metadata({ data: "json, name=ReportId" })
  reportId?: string;

  @Metadata({ data: "json, name=ReportName" })
  reportName?: string;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;
}
