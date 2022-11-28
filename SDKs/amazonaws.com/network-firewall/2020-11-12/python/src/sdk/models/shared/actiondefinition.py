from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionDefinition:
    r"""ActionDefinition
    A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.
    """
    
    publish_metric_action: Optional[PublishMetricAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublishMetricAction') }})
    
