import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElasticsearchDomainLogPublishingOptionsLogConfig } from "./awselasticsearchdomainlogpublishingoptionslogconfig";
/**
 * configures the CloudWatch Logs to publish for the Elasticsearch domain.
**/
export declare class AwsElasticsearchDomainLogPublishingOptions extends SpeakeasyBase {
    auditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
    indexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
    searchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}
