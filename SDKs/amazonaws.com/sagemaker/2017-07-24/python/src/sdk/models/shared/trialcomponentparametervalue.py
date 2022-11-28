from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrialComponentParameterValue:
    r"""TrialComponentParameterValue
    <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
    """
    
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValue') }})
    
