import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchOutputConfig
/** 
 * Configuration options for sending command output to Amazon CloudWatch Logs.
**/
export class CloudWatchOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogGroupName" })
  cloudWatchLogGroupName?: string;

  @Metadata({ data: "json, name=CloudWatchOutputEnabled" })
  cloudWatchOutputEnabled?: boolean;
}
