from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAgentVersionsResult:
    r"""DescribeAgentVersionsResult
    Contains the response to a <code>DescribeAgentVersions</code> request.
    """
    
    agent_versions: Optional[List[AgentVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersions') }})
    
