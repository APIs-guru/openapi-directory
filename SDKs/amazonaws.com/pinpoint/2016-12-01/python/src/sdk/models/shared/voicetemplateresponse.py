from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import templatetype_enum


@dataclass_json
@dataclass
class VoiceTemplateResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubstitutions' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    last_modified_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_type: templatetype_enum.TemplateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateType' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
