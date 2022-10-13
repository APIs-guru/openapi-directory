from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import builtinintentslot
from . import locale_enum


@dataclass_json
@dataclass
class GetBuiltinIntentResponse:
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    slots: Optional[List[builtinintentslot.BuiltinIntentSlot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    supported_locales: Optional[List[locale_enum.LocaleEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedLocales' }})
    
