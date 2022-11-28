from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetResourcesInput:
    exclude_compliant_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeCompliantResources') }})
    include_compliance_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeComplianceDetails') }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    resource_arn_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNList') }})
    resource_type_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypeFilters') }})
    resources_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourcesPerPage') }})
    tag_filters: Optional[List[TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagFilters') }})
    tags_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagsPerPage') }})
    
