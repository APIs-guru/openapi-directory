from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElasticsearchDomainDetails:
    r"""AwsElasticsearchDomainDetails
    Information about an Amazon Elasticsearch Service domain.
    """
    
    access_policies: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessPolicies') }})
    domain_endpoint_options: Optional[AwsElasticsearchDomainDomainEndpointOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainEndpointOptions') }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainId') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    elasticsearch_cluster_config: Optional[AwsElasticsearchDomainElasticsearchClusterConfigDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchClusterConfig') }})
    elasticsearch_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchVersion') }})
    encryption_at_rest_options: Optional[AwsElasticsearchDomainEncryptionAtRestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAtRestOptions') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    endpoints: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    log_publishing_options: Optional[AwsElasticsearchDomainLogPublishingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPublishingOptions') }})
    node_to_node_encryption_options: Optional[AwsElasticsearchDomainNodeToNodeEncryptionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeToNodeEncryptionOptions') }})
    service_software_options: Optional[AwsElasticsearchDomainServiceSoftwareOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceSoftwareOptions') }})
    vpc_options: Optional[AwsElasticsearchDomainVpcOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPCOptions') }})
    
