from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import texttranslationjobproperties


@dataclass_json
@dataclass
class DescribeTextTranslationJobResponse:
    text_translation_job_properties: Optional[texttranslationjobproperties.TextTranslationJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextTranslationJobProperties' }})
    
