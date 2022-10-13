from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import acceptcodevalidation_enum
from . import accepttype_enum


@dataclass_json
@dataclass
class AcceptPageRequest:
    accept_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptCode' }})
    accept_code_validation: Optional[acceptcodevalidation_enum.AcceptCodeValidationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptCodeValidation' }})
    accept_type: accepttype_enum.AcceptTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptType' }})
    contact_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactChannelId' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Note' }})
    page_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageId' }})
    
