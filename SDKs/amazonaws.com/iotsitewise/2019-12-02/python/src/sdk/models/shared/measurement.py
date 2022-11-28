from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Measurement:
    r"""Measurement
    Contains an asset measurement property. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements\">Measurements</a> in the <i>IoT SiteWise User Guide</i>.
    """
    
    processing_config: Optional[MeasurementProcessingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingConfig') }})
    
