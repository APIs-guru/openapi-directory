from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APICoreDtoGrantsGrant:
    datapoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatapointType') }, 'form': { 'field_name': 'DatapointType' }})
    entity: Optional[APICoreResponsesEntityURISystemInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entity') }, 'form': { 'field_name': 'Entity' }})
    entity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityName') }, 'form': { 'field_name': 'EntityName' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityType') }, 'form': { 'field_name': 'EntityType' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }, 'form': { 'field_name': 'Type' }})
    
