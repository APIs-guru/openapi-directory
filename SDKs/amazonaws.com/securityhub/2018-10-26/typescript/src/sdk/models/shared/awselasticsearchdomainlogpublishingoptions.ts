import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsElasticsearchDomainLogPublishingOptionsLogConfig } from "./awselasticsearchdomainlogpublishingoptionslogconfig";



// AwsElasticsearchDomainLogPublishingOptions
/** 
 * configures the CloudWatch Logs to publish for the Elasticsearch domain.
**/
export class AwsElasticsearchDomainLogPublishingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditLogs" })
  auditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  @SpeakeasyMetadata({ data: "json, name=IndexSlowLogs" })
  indexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  @SpeakeasyMetadata({ data: "json, name=SearchSlowLogs" })
  searchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}
