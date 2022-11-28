from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum(str, Enum):
    QUOTA_COUNTER_SCOPE_UNSPECIFIED = "QUOTA_COUNTER_SCOPE_UNSPECIFIED"
    PROXY = "PROXY"
    OPERATION = "OPERATION"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1APIProduct:
    api_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiResources') }})
    approval_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalType') }})
    attributes: Optional[List[GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    environments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    graphql_operation_group: Optional[GoogleCloudApigeeV1GraphQlOperationGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphqlOperationGroup') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation_group: Optional[GoogleCloudApigeeV1OperationGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationGroup') }})
    proxies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxies') }})
    quota: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    quota_counter_scope: Optional[GoogleCloudApigeeV1APIProductQuotaCounterScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaCounterScope') }})
    quota_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaInterval') }})
    quota_time_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaTimeUnit') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
