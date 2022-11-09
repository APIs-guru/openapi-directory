import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Report } from "./report";
import { ResourceQuotasRemaining } from "./resourcequotasremaining";


// GetReportsResponse
/** 
 * The main response class which holds the reports from the Reporting API `batchGet` call.
**/
export class GetReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryCost" })
  queryCost?: number;

  @Metadata({ data: "json, name=reports", elemType: shared.Report })
  reports?: Report[];

  @Metadata({ data: "json, name=resourceQuotasRemaining" })
  resourceQuotasRemaining?: ResourceQuotasRemaining;
}
