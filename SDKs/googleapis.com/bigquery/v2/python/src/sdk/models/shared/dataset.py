from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetaccessentry
from . import routinereference
from . import tablereference
from . import datasetreference
from . import encryptionconfiguration


@dataclass_json
@dataclass
class DatasetAccess:
    dataset: Optional[datasetaccessentry.DatasetAccessEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    group_by_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupByEmail' }})
    iam_member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamMember' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    routine: Optional[routinereference.RoutineReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routine' }})
    special_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialGroup' }})
    user_by_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userByEmail' }})
    view: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class DatasetTags:
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKey' }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValue' }})
    

@dataclass_json
@dataclass
class Dataset:
    access: Optional[List[DatasetAccess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    dataset_reference: Optional[datasetreference.DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetReference' }})
    default_collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCollation' }})
    default_encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultEncryptionConfiguration' }})
    default_partition_expiration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPartitionExpirationMs' }})
    default_table_expiration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTableExpirationMs' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCaseInsensitive' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    max_time_travel_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTimeTravelHours' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPzs' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    tags: Optional[List[DatasetTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
