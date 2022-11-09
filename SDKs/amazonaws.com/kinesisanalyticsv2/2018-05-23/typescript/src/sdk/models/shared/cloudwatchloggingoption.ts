import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLoggingOption
/** 
 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN). 
**/
export class CloudWatchLoggingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogStreamARN" })
  logStreamArn: string;
}
