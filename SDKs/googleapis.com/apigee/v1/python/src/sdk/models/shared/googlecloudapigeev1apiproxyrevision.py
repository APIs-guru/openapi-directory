from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1configversion
from . import googlecloudapigeev1resourcefiles


@dataclass_json
@dataclass
class GoogleCloudApigeeV1APIProxyRevision:
    archive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archive' }})
    basepaths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basepaths' }})
    configuration_version: Optional[googlecloudapigeev1configversion.GoogleCloudApigeeV1ConfigVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationVersion' }})
    context_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextInfo' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_meta_data_as_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityMetaDataAsProperties' }})
    integration_endpoints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationEndpoints' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    proxies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxies' }})
    proxy_endpoints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyEndpoints' }})
    resource_files: Optional[googlecloudapigeev1resourcefiles.GoogleCloudApigeeV1ResourceFiles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceFiles' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    shared_flows: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedFlows' }})
    spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    target_endpoints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetEndpoints' }})
    target_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetServers' }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    teams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
