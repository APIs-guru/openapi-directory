from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateAuthTokenRestrictions:
    r"""UpdateAuthTokenRestrictions
    Request model for updating auth token settings
    """
    
    overwrite_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwriteEnabled') }})
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTokenValidity') }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshTokenValidity') }})
    
