from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ArtifactInput:
    r"""ArtifactInput
    Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
    """
    
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class Artifact:
    r"""Artifact
    Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
    """
    
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
