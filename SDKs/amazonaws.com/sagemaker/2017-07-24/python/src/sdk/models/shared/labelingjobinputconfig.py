from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelingJobInputConfig:
    r"""LabelingJobInputConfig
    Input configuration information for a labeling job.
    """
    
    data_source: LabelingJobDataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    data_attributes: Optional[LabelingJobDataAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAttributes') }})
    
