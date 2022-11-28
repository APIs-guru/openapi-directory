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
class UpdateEndpointInput:
    endpoint_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigName') }})
    endpoint_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    deployment_config: Optional[DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentConfig') }})
    exclude_retained_variant_properties: Optional[List[VariantProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeRetainedVariantProperties') }})
    retain_all_variant_properties: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetainAllVariantProperties') }})
    
