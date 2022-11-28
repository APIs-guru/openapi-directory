from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductionVariantSummary:
    r"""ProductionVariantSummary
    Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. 
    """
    
    variant_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VariantName') }})
    current_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentInstanceCount') }})
    current_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentWeight') }})
    deployed_images: Optional[List[DeployedImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeployedImages') }})
    desired_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredInstanceCount') }})
    desired_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredWeight') }})
    
