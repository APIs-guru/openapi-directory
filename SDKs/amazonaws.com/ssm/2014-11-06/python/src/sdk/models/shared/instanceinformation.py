from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceaggregatedassociationoverview
from . import pingstatus_enum
from . import platformtype_enum
from . import resourcetype_enum


@dataclass_json
@dataclass
class InstanceInformation:
    activation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivationId' }})
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentVersion' }})
    association_overview: Optional[instanceaggregatedassociationoverview.InstanceAggregatedAssociationOverview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationOverview' }})
    association_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationStatus' }})
    computer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputerName' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPAddress' }})
    iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRole' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    is_latest_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLatestVersion' }})
    last_association_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAssociationExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_ping_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPingDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_successful_association_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfulAssociationExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    ping_status: Optional[pingstatus_enum.PingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PingStatus' }})
    platform_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformName' }})
    platform_type: Optional[platformtype_enum.PlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformType' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformVersion' }})
    registration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
