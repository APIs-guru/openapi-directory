import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
import { ResourceQuotasRemaining } from "./resourcequotasremaining";



// GetReportsResponse
/** 
 * The main response class which holds the reports from the Reporting API `batchGet` call.
**/
export class GetReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryCost" })
  queryCost?: number;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: Report })
  reports?: Report[];

  @SpeakeasyMetadata({ data: "json, name=resourceQuotasRemaining" })
  resourceQuotasRemaining?: ResourceQuotasRemaining;
}
