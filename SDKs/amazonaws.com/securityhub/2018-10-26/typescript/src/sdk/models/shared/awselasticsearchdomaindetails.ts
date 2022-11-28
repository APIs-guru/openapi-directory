import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AccessPolicies" })
  accessPolicies?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainEndpointOptions" })
  domainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ElasticsearchClusterConfig" })
  elasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;

  @SpeakeasyMetadata({ data: "json, name=ElasticsearchVersion" })
  elasticsearchVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionAtRestOptions" })
  encryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Endpoints" })
  endpoints?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=LogPublishingOptions" })
  logPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;

  @SpeakeasyMetadata({ data: "json, name=NodeToNodeEncryptionOptions" })
  nodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  @SpeakeasyMetadata({ data: "json, name=ServiceSoftwareOptions" })
  serviceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;

  @SpeakeasyMetadata({ data: "json, name=VPCOptions" })
  vpcOptions?: AwsElasticsearchDomainVpcOptions;
}
