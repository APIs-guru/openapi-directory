from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MeasurementProcessingConfig:
    r"""MeasurementProcessingConfig
    The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.
    """
    
    forwarding_config: ForwardingConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingConfig') }})
    
