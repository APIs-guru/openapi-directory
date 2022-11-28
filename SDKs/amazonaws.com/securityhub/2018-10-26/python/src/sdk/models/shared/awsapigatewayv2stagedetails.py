from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsAPIGatewayV2StageDetails:
    r"""AwsAPIGatewayV2StageDetails
    Contains information about a version 2 stage for Amazon API Gateway.
    """
    
    access_log_settings: Optional[AwsAPIGatewayAccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLogSettings') }})
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiGatewayManaged') }})
    auto_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoDeploy') }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientCertificateId') }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate') }})
    default_route_settings: Optional[AwsAPIGatewayV2RouteSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRouteSettings') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    last_deployment_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastDeploymentStatusMessage') }})
    last_updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDate') }})
    route_settings: Optional[AwsAPIGatewayV2RouteSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteSettings') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageName') }})
    stage_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageVariables') }})
    
