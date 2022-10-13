from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceupdatestatus_enum
from . import serviceupdatetype_enum


@dataclass_json
@dataclass
class ServiceUpdate:
    auto_update_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoUpdateStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    nodes_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodesUpdated' }})
    release_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_update_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUpdateName' }})
    status: Optional[serviceupdatestatus_enum.ServiceUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[serviceupdatetype_enum.ServiceUpdateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
