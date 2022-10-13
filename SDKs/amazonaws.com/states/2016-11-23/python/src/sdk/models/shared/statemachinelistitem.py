from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import statemachinetype_enum


@dataclass_json
@dataclass
class StateMachineListItem:
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state_machine_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    type: statemachinetype_enum.StateMachineTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
