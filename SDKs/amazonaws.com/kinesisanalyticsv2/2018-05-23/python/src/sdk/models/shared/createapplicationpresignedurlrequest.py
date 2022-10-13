from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import urltype_enum


@dataclass_json
@dataclass
class CreateApplicationPresignedURLRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    session_expiration_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionExpirationDurationInSeconds' }})
    url_type: urltype_enum.URLTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UrlType' }})
    
