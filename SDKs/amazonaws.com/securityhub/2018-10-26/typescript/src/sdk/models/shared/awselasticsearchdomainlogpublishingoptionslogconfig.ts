import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticsearchDomainLogPublishingOptionsLogConfig
/** 
 * The log configuration.
**/
export class AwsElasticsearchDomainLogPublishingOptionsLogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsLogGroupArn" })
  cloudWatchLogsLogGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
