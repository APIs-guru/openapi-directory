from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import parametertype_enum


@dataclass_json
@dataclass
class Parameter:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    source_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceResult' }})
    type: Optional[parametertype_enum.ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
