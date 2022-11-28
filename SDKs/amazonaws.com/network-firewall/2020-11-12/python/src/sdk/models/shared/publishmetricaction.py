from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublishMetricAction:
    r"""PublishMetricAction
    Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
    """
    
    dimensions: List[Dimension] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    
