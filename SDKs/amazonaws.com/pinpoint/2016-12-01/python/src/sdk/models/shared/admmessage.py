from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action_enum


@dataclass_json
@dataclass
class AdmMessage:
    action: Optional[action_enum.ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    consolidation_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsolidationKey' }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    expires_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiresAfter' }})
    icon_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IconReference' }})
    image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageIconUrl' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUrl' }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MD5' }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RawContent' }})
    silent_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SilentPush' }})
    small_image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmallImageIconUrl' }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sound' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
