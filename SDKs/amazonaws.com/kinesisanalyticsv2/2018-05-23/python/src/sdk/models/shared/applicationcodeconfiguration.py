from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import codecontent
from . import codecontenttype_enum


@dataclass_json
@dataclass
class ApplicationCodeConfiguration:
    code_content: Optional[codecontent.CodeContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeContent' }})
    code_content_type: codecontenttype_enum.CodeContentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeContentType' }})
    
