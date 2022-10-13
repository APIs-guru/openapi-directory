from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsapigatewayaccesslogsettings
from . import awsapigatewaycanarysettings
from . import awsapigatewaymethodsettings


@dataclass_json
@dataclass
class AwsAPIGatewayStageDetails:
    access_log_settings: Optional[awsapigatewayaccesslogsettings.AwsAPIGatewayAccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLogSettings' }})
    cache_cluster_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheClusterEnabled' }})
    cache_cluster_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheClusterSize' }})
    cache_cluster_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheClusterStatus' }})
    canary_settings: Optional[awsapigatewaycanarysettings.AwsAPIGatewayCanarySettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanarySettings' }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCertificateId' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    documentation_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentationVersion' }})
    last_updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDate' }})
    method_settings: Optional[List[awsapigatewaymethodsettings.AwsAPIGatewayMethodSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MethodSettings' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageName' }})
    tracing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TracingEnabled' }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variables' }})
    web_acl_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebAclArn' }})
    
