from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDeploymentsResult:
    r"""DescribeDeploymentsResult
    Contains the response to a <code>DescribeDeployments</code> request.
    """
    
    deployments: Optional[List[Deployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deployments') }})
    
