from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIDeployment:
    access_guidance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessGuidance' }})
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    api_spec_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiSpecRevision' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    endpoint_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointUri' }})
    external_channel_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalChannelUri' }})
    intended_audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intendedAudience' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreateTime' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    revision_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionUpdateTime' }})
    
