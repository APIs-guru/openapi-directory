from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metric:
    r"""Metric
    <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics\">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p>
    """
    
    expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    variables: List[ExpressionVariable] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    window: MetricWindow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    processing_config: Optional[MetricProcessingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingConfig') }})
    
