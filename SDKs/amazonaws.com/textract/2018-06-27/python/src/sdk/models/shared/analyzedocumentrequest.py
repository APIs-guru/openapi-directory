from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeDocumentRequest:
    document: Document = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Document') }})
    feature_types: List[FeatureTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureTypes') }})
    human_loop_config: Optional[HumanLoopConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopConfig') }})
    
