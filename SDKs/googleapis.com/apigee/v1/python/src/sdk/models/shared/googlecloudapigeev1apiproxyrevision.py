from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1APIProxyRevision:
    r"""GoogleCloudApigeeV1APIProxyRevision
    API proxy revision.
    """
    
    archive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive') }})
    basepaths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basepaths') }})
    configuration_version: Optional[GoogleCloudApigeeV1ConfigVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationVersion') }})
    context_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextInfo') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_meta_data_as_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityMetaDataAsProperties') }})
    integration_endpoints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationEndpoints') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    proxies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxies') }})
    proxy_endpoints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyEndpoints') }})
    resource_files: Optional[GoogleCloudApigeeV1ResourceFiles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceFiles') }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    shared_flows: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedFlows') }})
    spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    target_endpoints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetEndpoints') }})
    target_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetServers') }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    teams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
