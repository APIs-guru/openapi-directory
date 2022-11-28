from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SharedFlowRevision:
    r"""GoogleCloudApigeeV1SharedFlowRevision
    The metadata describing a shared flow revision.
    """
    
    configuration_version: Optional[GoogleCloudApigeeV1ConfigVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationVersion') }})
    context_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextInfo') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_meta_data_as_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityMetaDataAsProperties') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    resource_files: Optional[GoogleCloudApigeeV1ResourceFiles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceFiles') }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    shared_flows: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedFlows') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
