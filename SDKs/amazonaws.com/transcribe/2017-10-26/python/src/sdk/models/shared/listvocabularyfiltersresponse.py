from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vocabularyfilterinfo


@dataclass_json
@dataclass
class ListVocabularyFiltersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    vocabulary_filters: Optional[List[vocabularyfilterinfo.VocabularyFilterInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilters' }})
    
