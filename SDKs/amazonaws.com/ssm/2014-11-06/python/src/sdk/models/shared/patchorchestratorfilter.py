from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatchOrchestratorFilter:
    r"""PatchOrchestratorFilter
    <p>Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API operation that includes the filter. Patch Manager API operations that use <code>PatchOrchestratorFilter</code> include the following:</p> <ul> <li> <p> <a>DescribeAvailablePatches</a> </p> </li> <li> <p> <a>DescribeInstancePatches</a> </p> </li> <li> <p> <a>DescribePatchBaselines</a> </p> </li> <li> <p> <a>DescribePatchGroups</a> </p> </li> </ul>
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
