from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inappmessagecontent
from . import layout_enum
from . import templatetype_enum


@dataclass_json
@dataclass
class InAppTemplateResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    content: Optional[List[inappmessagecontent.InAppMessageContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    custom_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomConfig' }})
    last_modified_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    layout: Optional[layout_enum.LayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Layout' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_type: templatetype_enum.TemplateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateType' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
