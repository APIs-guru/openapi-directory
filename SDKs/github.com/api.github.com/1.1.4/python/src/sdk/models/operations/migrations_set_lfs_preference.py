from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class MigrationsSetLfsPreferencePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class MigrationsSetLfsPreferenceRequestBodyUseLfsEnum(str, Enum):
    OPT_IN = "opt_in"
    OPT_OUT = "opt_out"


@dataclass_json
@dataclass
class MigrationsSetLfsPreferenceRequestBody:
    use_lfs: MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_lfs' }})
    

@dataclass
class MigrationsSetLfsPreferenceRequest:
    path_params: MigrationsSetLfsPreferencePathParams = field(default=None)
    request: Optional[MigrationsSetLfsPreferenceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrationsSetLfsPreferenceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    import_: Optional[shared.Import] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
