import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliverabilityTestReport } from "./deliverabilitytestreport";


// ListDeliverabilityTestReportsResponse
/** 
 * A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
**/
export class ListDeliverabilityTestReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliverabilityTestReports", elemType: shared.DeliverabilityTestReport })
  deliverabilityTestReports: DeliverabilityTestReport[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
