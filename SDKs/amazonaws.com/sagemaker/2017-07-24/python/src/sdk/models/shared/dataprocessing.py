from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataProcessing:
    r"""DataProcessing
    The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html\">Associate Prediction Results with their Corresponding Input Records</a>.
    """
    
    input_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputFilter') }})
    join_source: Optional[JoinSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JoinSource') }})
    output_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFilter') }})
    
