from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awselasticsearchdomaindomainendpointoptions
from . import awselasticsearchdomainelasticsearchclusterconfigdetails
from . import awselasticsearchdomainencryptionatrestoptions
from . import awselasticsearchdomainlogpublishingoptions
from . import awselasticsearchdomainnodetonodeencryptionoptions
from . import awselasticsearchdomainservicesoftwareoptions
from . import awselasticsearchdomainvpcoptions


@dataclass_json
@dataclass
class AwsElasticsearchDomainDetails:
    access_policies: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessPolicies' }})
    domain_endpoint_options: Optional[awselasticsearchdomaindomainendpointoptions.AwsElasticsearchDomainDomainEndpointOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainEndpointOptions' }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    elasticsearch_cluster_config: Optional[awselasticsearchdomainelasticsearchclusterconfigdetails.AwsElasticsearchDomainElasticsearchClusterConfigDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticsearchClusterConfig' }})
    elasticsearch_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticsearchVersion' }})
    encryption_at_rest_options: Optional[awselasticsearchdomainencryptionatrestoptions.AwsElasticsearchDomainEncryptionAtRestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionAtRestOptions' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    endpoints: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoints' }})
    log_publishing_options: Optional[awselasticsearchdomainlogpublishingoptions.AwsElasticsearchDomainLogPublishingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogPublishingOptions' }})
    node_to_node_encryption_options: Optional[awselasticsearchdomainnodetonodeencryptionoptions.AwsElasticsearchDomainNodeToNodeEncryptionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeToNodeEncryptionOptions' }})
    service_software_options: Optional[awselasticsearchdomainservicesoftwareoptions.AwsElasticsearchDomainServiceSoftwareOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceSoftwareOptions' }})
    vpc_options: Optional[awselasticsearchdomainvpcoptions.AwsElasticsearchDomainVpcOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VPCOptions' }})
    
