import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticsearchDomainLogPublishingOptionsLogConfig
/** 
 * The log configuration.
**/
export class AwsElasticsearchDomainLogPublishingOptionsLogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogsLogGroupArn" })
  cloudWatchLogsLogGroupArn?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
