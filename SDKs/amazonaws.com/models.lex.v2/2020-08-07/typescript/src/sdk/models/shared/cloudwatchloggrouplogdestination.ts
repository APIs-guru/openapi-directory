import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLogGroupLogDestination
/** 
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
**/
export class CloudWatchLogGroupLogDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogGroupArn" })
  cloudWatchLogGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=logPrefix" })
  logPrefix: string;
}
