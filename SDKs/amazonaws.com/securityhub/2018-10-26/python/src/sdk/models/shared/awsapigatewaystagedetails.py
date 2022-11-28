from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsAPIGatewayStageDetails:
    r"""AwsAPIGatewayStageDetails
    Provides information about a version 1 Amazon API Gateway stage.
    """
    
    access_log_settings: Optional[AwsAPIGatewayAccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLogSettings') }})
    cache_cluster_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CacheClusterEnabled') }})
    cache_cluster_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CacheClusterSize') }})
    cache_cluster_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CacheClusterStatus') }})
    canary_settings: Optional[AwsAPIGatewayCanarySettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanarySettings') }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientCertificateId') }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    documentation_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentationVersion') }})
    last_updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDate') }})
    method_settings: Optional[List[AwsAPIGatewayMethodSettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MethodSettings') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageName') }})
    tracing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TracingEnabled') }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    web_acl_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebAclArn') }})
    
