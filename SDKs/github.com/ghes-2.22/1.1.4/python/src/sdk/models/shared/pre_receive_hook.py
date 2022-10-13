from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreReceiveHookEnvironmentDownload:
    downloaded_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloaded_at' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PreReceiveHookEnvironment:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    default_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_environment' }})
    download: Optional[PreReceiveHookEnvironmentDownload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    hooks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks_count' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PreReceiveHookScriptRepository:
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full_name' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PreReceiveHook:
    allow_downstream_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_downstream_configuration' }})
    enforcement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcement' }})
    environment: Optional[PreReceiveHookEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    script_repository: Optional[PreReceiveHookScriptRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_repository' }})
    
