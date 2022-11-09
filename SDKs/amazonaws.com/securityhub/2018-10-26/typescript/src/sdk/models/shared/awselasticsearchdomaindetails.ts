import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsElasticsearchDomainDomainEndpointOptions } from "./awselasticsearchdomaindomainendpointoptions";
import { AwsElasticsearchDomainElasticsearchClusterConfigDetails } from "./awselasticsearchdomainelasticsearchclusterconfigdetails";
import { AwsElasticsearchDomainEncryptionAtRestOptions } from "./awselasticsearchdomainencryptionatrestoptions";
import { AwsElasticsearchDomainLogPublishingOptions } from "./awselasticsearchdomainlogpublishingoptions";
import { AwsElasticsearchDomainNodeToNodeEncryptionOptions } from "./awselasticsearchdomainnodetonodeencryptionoptions";
import { AwsElasticsearchDomainServiceSoftwareOptions } from "./awselasticsearchdomainservicesoftwareoptions";
import { AwsElasticsearchDomainVpcOptions } from "./awselasticsearchdomainvpcoptions";


// AwsElasticsearchDomainDetails
/** 
 * Information about an Amazon Elasticsearch Service domain.
**/
export class AwsElasticsearchDomainDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessPolicies" })
  accessPolicies?: string;

  @Metadata({ data: "json, name=DomainEndpointOptions" })
  domainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=ElasticsearchClusterConfig" })
  elasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;

  @Metadata({ data: "json, name=ElasticsearchVersion" })
  elasticsearchVersion?: string;

  @Metadata({ data: "json, name=EncryptionAtRestOptions" })
  encryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=Endpoints" })
  endpoints?: Map<string, string>;

  @Metadata({ data: "json, name=LogPublishingOptions" })
  logPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;

  @Metadata({ data: "json, name=NodeToNodeEncryptionOptions" })
  nodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  @Metadata({ data: "json, name=ServiceSoftwareOptions" })
  serviceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;

  @Metadata({ data: "json, name=VPCOptions" })
  vpcOptions?: AwsElasticsearchDomainVpcOptions;
}
