from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectreference


@dataclass_json
@dataclass
class ProjectListProjects:
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    numeric_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericId' }})
    project_reference: Optional[projectreference.ProjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectReference' }})
    

@dataclass_json
@dataclass
class ProjectList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    projects: Optional[List[ProjectListProjects]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projects' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    
