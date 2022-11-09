import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchDashboard
/** 
 * Information about a CloudWatch dashboard.
**/
export class CloudWatchDashboard extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
