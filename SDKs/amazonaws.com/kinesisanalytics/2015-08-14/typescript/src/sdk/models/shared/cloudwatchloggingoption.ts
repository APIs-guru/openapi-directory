import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLoggingOption
/** 
 * Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
**/
export class CloudWatchLoggingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogStreamARN" })
  logStreamArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
