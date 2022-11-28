import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElasticsearchDomainDomainEndpointOptions } from "./awselasticsearchdomaindomainendpointoptions";
import { AwsElasticsearchDomainElasticsearchClusterConfigDetails } from "./awselasticsearchdomainelasticsearchclusterconfigdetails";
import { AwsElasticsearchDomainEncryptionAtRestOptions } from "./awselasticsearchdomainencryptionatrestoptions";
import { AwsElasticsearchDomainLogPublishingOptions } from "./awselasticsearchdomainlogpublishingoptions";
import { AwsElasticsearchDomainNodeToNodeEncryptionOptions } from "./awselasticsearchdomainnodetonodeencryptionoptions";
import { AwsElasticsearchDomainServiceSoftwareOptions } from "./awselasticsearchdomainservicesoftwareoptions";
import { AwsElasticsearchDomainVpcOptions } from "./awselasticsearchdomainvpcoptions";
/**
 * Information about an Amazon Elasticsearch Service domain.
**/
export declare class AwsElasticsearchDomainDetails extends SpeakeasyBase {
    accessPolicies?: string;
    domainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
    domainId?: string;
    domainName?: string;
    elasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;
    elasticsearchVersion?: string;
    encryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;
    endpoint?: string;
    endpoints?: Map<string, string>;
    logPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;
    nodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;
    serviceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;
    vpcOptions?: AwsElasticsearchDomainVpcOptions;
}
