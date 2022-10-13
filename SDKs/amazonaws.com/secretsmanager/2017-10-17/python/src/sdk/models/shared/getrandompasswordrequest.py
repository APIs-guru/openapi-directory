from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetRandomPasswordRequest:
    exclude_characters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeCharacters' }})
    exclude_lowercase: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeLowercase' }})
    exclude_numbers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeNumbers' }})
    exclude_punctuation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludePunctuation' }})
    exclude_uppercase: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeUppercase' }})
    include_space: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeSpace' }})
    password_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordLength' }})
    require_each_included_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequireEachIncludedType' }})
    
