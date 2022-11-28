from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetAccess:
    dataset: Optional[DatasetAccessEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    group_by_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupByEmail') }})
    iam_member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamMember') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    routine: Optional[RoutineReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routine') }})
    special_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialGroup') }})
    user_by_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userByEmail') }})
    view: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class DatasetTags:
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagKey') }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValue') }})
    

@dataclass_json
@dataclass
class Dataset:
    access: Optional[List[DatasetAccess]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    dataset_reference: Optional[DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetReference') }})
    default_collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCollation') }})
    default_encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultEncryptionConfiguration') }})
    default_partition_expiration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPartitionExpirationMs') }})
    default_table_expiration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTableExpirationMs') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCaseInsensitive') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    max_time_travel_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTimeTravelHours') }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPzs') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    storage_billing_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageBillingModel') }})
    tags: Optional[List[DatasetTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
