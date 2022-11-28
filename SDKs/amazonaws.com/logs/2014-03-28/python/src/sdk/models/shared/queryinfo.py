from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryInfo:
    r"""QueryInfo
    Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. 
    """
    
    create_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryId') }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    status: Optional[QueryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
