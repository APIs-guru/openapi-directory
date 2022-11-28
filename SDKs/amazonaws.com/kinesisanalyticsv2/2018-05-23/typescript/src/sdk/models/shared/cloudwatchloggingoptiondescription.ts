import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLoggingOptionDescription
/** 
 * Describes the Amazon CloudWatch logging option.
**/
export class CloudWatchLoggingOptionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionId" })
  cloudWatchLoggingOptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogStreamARN" })
  logStreamArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
