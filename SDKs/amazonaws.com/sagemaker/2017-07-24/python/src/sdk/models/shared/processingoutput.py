from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingOutput:
    r"""ProcessingOutput
    Describes the results of a processing job. The processing output must specify exactly one of either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.
    """
    
    output_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputName') }})
    app_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppManaged') }})
    feature_store_output: Optional[ProcessingFeatureStoreOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureStoreOutput') }})
    s3_output: Optional[ProcessingS3Output] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Output') }})
    
