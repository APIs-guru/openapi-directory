from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrialComponentSource:
    r"""TrialComponentSource
    The Amazon Resource Name (ARN) and job type of the source of a trial component.
    """
    
    source_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceArn') }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    
