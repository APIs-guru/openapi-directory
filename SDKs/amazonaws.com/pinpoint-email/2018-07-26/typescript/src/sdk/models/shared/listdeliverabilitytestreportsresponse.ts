import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestReport } from "./deliverabilitytestreport";



// ListDeliverabilityTestReportsResponse
/** 
 * A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
**/
export class ListDeliverabilityTestReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliverabilityTestReports", elemType: DeliverabilityTestReport })
  deliverabilityTestReports: DeliverabilityTestReport[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
