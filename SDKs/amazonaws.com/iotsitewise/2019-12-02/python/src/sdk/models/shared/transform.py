from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Transform:
    r"""Transform
    <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms\">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>
    """
    
    expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    variables: List[ExpressionVariable] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    processing_config: Optional[TransformProcessingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingConfig') }})
    
