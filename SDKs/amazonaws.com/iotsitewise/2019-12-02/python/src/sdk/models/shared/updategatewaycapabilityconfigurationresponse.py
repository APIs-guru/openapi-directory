from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateGatewayCapabilityConfigurationResponse:
    capability_namespace: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilityNamespace') }})
    capability_sync_status: CapabilitySyncStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilitySyncStatus') }})
    
