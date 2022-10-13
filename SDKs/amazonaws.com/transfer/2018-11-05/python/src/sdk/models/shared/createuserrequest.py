from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import homedirectorymapentry
from . import homedirectorytype_enum
from . import posixprofile
from . import tag


@dataclass_json
@dataclass
class CreateUserRequest:
    home_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeDirectory' }})
    home_directory_mappings: Optional[List[homedirectorymapentry.HomeDirectoryMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeDirectoryMappings' }})
    home_directory_type: Optional[homedirectorytype_enum.HomeDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeDirectoryType' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    posix_profile: Optional[posixprofile.PosixProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PosixProfile' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    ssh_public_key_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshPublicKeyBody' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
