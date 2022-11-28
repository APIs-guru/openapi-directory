from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrialComponentSourceDetail:
    r"""TrialComponentSourceDetail
    Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.
    """
    
    processing_job: Optional[ProcessingJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingJob') }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceArn') }})
    training_job: Optional[TrainingJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJob') }})
    transform_job: Optional[TransformJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJob') }})
    
