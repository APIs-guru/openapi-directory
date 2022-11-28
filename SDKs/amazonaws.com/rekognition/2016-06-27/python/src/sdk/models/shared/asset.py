from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Asset:
    r"""Asset
    Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training. 
    """
    
    ground_truth_manifest: Optional[GroundTruthManifest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroundTruthManifest') }})
    
