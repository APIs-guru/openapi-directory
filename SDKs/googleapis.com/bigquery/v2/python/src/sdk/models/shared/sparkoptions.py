from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SparkOptions:
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveUris' }})
    connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUris' }})
    jar_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jarUris' }})
    main_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainFileUri' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    py_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pyFileUris' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersion' }})
    
