from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import parameterinlinepolicy
from . import parametertier_enum
from . import parametertype_enum


@dataclass_json
@dataclass
class ParameterHistory:
    allowed_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedPattern' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Labels' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedUser' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    policies: Optional[List[parameterinlinepolicy.ParameterInlinePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policies' }})
    tier: Optional[parametertier_enum.ParameterTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    type: Optional[parametertype_enum.ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
