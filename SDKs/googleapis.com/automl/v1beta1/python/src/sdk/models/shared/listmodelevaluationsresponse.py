from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import modelevaluation


@dataclass_json
@dataclass
class ListModelEvaluationsResponse:
    model_evaluation: Optional[List[modelevaluation.ModelEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelEvaluation' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
