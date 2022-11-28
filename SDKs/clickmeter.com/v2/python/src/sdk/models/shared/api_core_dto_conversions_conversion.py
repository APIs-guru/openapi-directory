from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APICoreDtoConversionsConversionProtocolEnum(str, Enum):
    HTTP = "Http"
    HTTPS = "Https"


@dataclass_json
@dataclass
class APICoreDtoConversionsConversion:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }, 'form': { 'field_name': 'code' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }, 'form': { 'field_name': 'creationDate' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }, 'form': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }, 'form': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }, 'form': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }, 'form': { 'field_name': 'name' }})
    protocol: Optional[APICoreDtoConversionsConversionProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }, 'form': { 'field_name': 'protocol' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }, 'form': { 'field_name': 'value' }})
    
