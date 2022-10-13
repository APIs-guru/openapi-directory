from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsapigatewayaccesslogsettings
from . import awsapigatewayv2routesettings
from . import awsapigatewayv2routesettings


@dataclass_json
@dataclass
class AwsAPIGatewayV2StageDetails:
    access_log_settings: Optional[awsapigatewayaccesslogsettings.AwsAPIGatewayAccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLogSettings' }})
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiGatewayManaged' }})
    auto_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoDeploy' }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCertificateId' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate' }})
    default_route_settings: Optional[awsapigatewayv2routesettings.AwsAPIGatewayV2RouteSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultRouteSettings' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_deployment_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastDeploymentStatusMessage' }})
    last_updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDate' }})
    route_settings: Optional[awsapigatewayv2routesettings.AwsAPIGatewayV2RouteSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteSettings' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageName' }})
    stage_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageVariables' }})
    
