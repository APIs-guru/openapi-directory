from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SampleUtterance:
    r"""SampleUtterance
    A sample utterance that invokes an intent or respond to a slot elicitation prompt.
    """
    
    utterance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('utterance') }})
    
