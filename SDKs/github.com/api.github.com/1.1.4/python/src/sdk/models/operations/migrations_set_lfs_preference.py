from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MigrationsSetLfsPreferencePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class MigrationsSetLfsPreferenceRequestBodyUseLfsEnum(str, Enum):
    OPT_IN = "opt_in"
    OPT_OUT = "opt_out"


@dataclass_json
@dataclass
class MigrationsSetLfsPreferenceRequestBody:
    use_lfs: MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_lfs') }})
    

@dataclass
class MigrationsSetLfsPreferenceRequest:
    path_params: MigrationsSetLfsPreferencePathParams = field()
    request: Optional[MigrationsSetLfsPreferenceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrationsSetLfsPreferenceResponse:
    content_type: str = field()
    status_code: int = field()
    import_: Optional[shared.Import] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
