from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1configversion
from . import googlecloudapigeev1resourcefiles


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SharedFlowRevision:
    configuration_version: Optional[googlecloudapigeev1configversion.GoogleCloudApigeeV1ConfigVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationVersion' }})
    context_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextInfo' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_meta_data_as_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityMetaDataAsProperties' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    resource_files: Optional[googlecloudapigeev1resourcefiles.GoogleCloudApigeeV1ResourceFiles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceFiles' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    shared_flows: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedFlows' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
