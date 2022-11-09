import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLoggingOptionDescription
/** 
 * Description of the CloudWatch logging option.
**/
export class CloudWatchLoggingOptionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLoggingOptionId" })
  cloudWatchLoggingOptionId?: string;

  @Metadata({ data: "json, name=LogStreamARN" })
  logStreamArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
