from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HpoObjective:
    r"""HpoObjective
    <p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>
    """
    
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    metric_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricRegex') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
