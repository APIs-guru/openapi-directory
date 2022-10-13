from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import patchcompliancedatastate_enum


@dataclass_json
@dataclass
class PatchComplianceData:
    cve_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CVEIds' }})
    classification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classification' }})
    installed_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kb_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KBId' }})
    severity: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    state: patchcompliancedatastate_enum.PatchComplianceDataStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
