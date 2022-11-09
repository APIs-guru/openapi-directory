import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLogsDestination
/** 
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
**/
export class CloudWatchLogsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=LogGroupArn" })
  logGroupArn?: string;
}
