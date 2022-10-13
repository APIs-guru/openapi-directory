from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import templatetype_enum


@dataclass_json
@dataclass
class EmailTemplateResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubstitutions' }})
    html_part: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HtmlPart' }})
    last_modified_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    recommender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommenderId' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_type: templatetype_enum.TemplateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateType' }})
    text_part: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextPart' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
