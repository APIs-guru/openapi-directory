from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import document
from . import featuretype_enum
from . import humanloopconfig


@dataclass_json
@dataclass
class AnalyzeDocumentRequest:
    document: document.Document = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Document' }})
    feature_types: List[featuretype_enum.FeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureTypes' }})
    human_loop_config: Optional[humanloopconfig.HumanLoopConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopConfig' }})
    
