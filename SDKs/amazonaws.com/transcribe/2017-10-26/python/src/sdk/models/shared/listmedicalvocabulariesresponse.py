from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import vocabularystate_enum
from . import vocabularyinfo


@dataclass_json
@dataclass
class ListMedicalVocabulariesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[vocabularystate_enum.VocabularyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    vocabularies: Optional[List[vocabularyinfo.VocabularyInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Vocabularies' }})
    
