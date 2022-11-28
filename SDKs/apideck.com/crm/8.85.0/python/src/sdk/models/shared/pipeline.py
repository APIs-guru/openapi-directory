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
class PipelineStagesInput:
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_order') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    win_probability: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('win_probability') }})
    

@dataclass_json
@dataclass
class PipelineStages:
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_order') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    win_probability: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('win_probability') }})
    

@dataclass_json
@dataclass
class PipelineInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_order') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    stages: Optional[List[PipelineStagesInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    

@dataclass_json
@dataclass
class Pipeline:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_order') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    stages: Optional[List[PipelineStages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
