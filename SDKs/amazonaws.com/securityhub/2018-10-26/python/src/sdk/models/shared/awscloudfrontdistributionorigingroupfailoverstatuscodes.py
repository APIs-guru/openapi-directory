from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroupFailoverStatusCodes:
    r"""AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
    The status codes that cause an origin group to fail over.
    """
    
    items: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    
