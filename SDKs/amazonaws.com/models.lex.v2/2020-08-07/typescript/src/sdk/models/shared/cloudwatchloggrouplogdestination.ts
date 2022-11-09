import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLogGroupLogDestination
/** 
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
**/
export class CloudWatchLogGroupLogDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchLogGroupArn" })
  cloudWatchLogGroupArn: string;

  @Metadata({ data: "json, name=logPrefix" })
  logPrefix: string;
}
