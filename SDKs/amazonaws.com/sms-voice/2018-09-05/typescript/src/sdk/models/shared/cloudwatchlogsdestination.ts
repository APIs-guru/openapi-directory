import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLogsDestination
/** 
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
**/
export class CloudWatchLogsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LogGroupArn" })
  logGroupArn?: string;
}
