import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchOutputConfig
/** 
 * Configuration options for sending command output to Amazon CloudWatch Logs.
**/
export class CloudWatchOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogGroupName" })
  cloudWatchLogGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchOutputEnabled" })
  cloudWatchOutputEnabled?: boolean;
}
