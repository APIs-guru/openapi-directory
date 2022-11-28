import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchDashboard
/** 
 * Information about a CloudWatch dashboard.
**/
export class CloudWatchDashboard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
