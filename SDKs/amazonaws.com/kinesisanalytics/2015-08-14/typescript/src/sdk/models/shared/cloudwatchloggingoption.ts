import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLoggingOption
/** 
 * Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
**/
export class CloudWatchLoggingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogStreamARN" })
  logStreamArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
