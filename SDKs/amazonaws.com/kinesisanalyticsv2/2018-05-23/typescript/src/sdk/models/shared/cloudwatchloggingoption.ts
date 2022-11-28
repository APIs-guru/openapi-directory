import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLoggingOption
/** 
 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN). 
**/
export class CloudWatchLoggingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogStreamARN" })
  logStreamArn: string;
}
