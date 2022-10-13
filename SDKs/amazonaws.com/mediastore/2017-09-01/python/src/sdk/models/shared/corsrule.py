from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import methodname_enum


@dataclass_json
@dataclass
class CorsRule:
    allowed_headers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedHeaders' }})
    allowed_methods: Optional[List[methodname_enum.MethodNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedMethods' }})
    allowed_origins: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedOrigins' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExposeHeaders' }})
    max_age_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAgeSeconds' }})
    
