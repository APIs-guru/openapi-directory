import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsElasticsearchDomainLogPublishingOptionsLogConfig } from "./awselasticsearchdomainlogpublishingoptionslogconfig";
import { AwsElasticsearchDomainLogPublishingOptionsLogConfig } from "./awselasticsearchdomainlogpublishingoptionslogconfig";
import { AwsElasticsearchDomainLogPublishingOptionsLogConfig } from "./awselasticsearchdomainlogpublishingoptionslogconfig";


// AwsElasticsearchDomainLogPublishingOptions
/** 
 * configures the CloudWatch Logs to publish for the Elasticsearch domain.
**/
export class AwsElasticsearchDomainLogPublishingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditLogs" })
  auditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  @Metadata({ data: "json, name=IndexSlowLogs" })
  indexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  @Metadata({ data: "json, name=SearchSlowLogs" })
  searchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}
