from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Connector:
    r"""Connector
    Represents a connector.
    """
    
    associated_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    capability_list: Optional[List[ConnectorCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilityList') }})
    connector_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorId') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macAddress') }})
    status: Optional[ConnectorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    vm_manager_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmManagerId') }})
    vm_manager_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmManagerName') }})
    vm_manager_type: Optional[VMManagerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmManagerType') }})
    
