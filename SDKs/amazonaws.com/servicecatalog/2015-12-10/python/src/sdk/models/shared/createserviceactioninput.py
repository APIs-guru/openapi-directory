from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceactiondefinitiontype_enum


@dataclass_json
@dataclass
class CreateServiceActionInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    definition: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    definition_type: serviceactiondefinitiontype_enum.ServiceActionDefinitionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefinitionType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
