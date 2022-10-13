from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import texttranslationjobproperties


@dataclass_json
@dataclass
class ListTextTranslationJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    text_translation_job_properties_list: Optional[List[texttranslationjobproperties.TextTranslationJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextTranslationJobPropertiesList' }})
    
