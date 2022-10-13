from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import codecontentdescription
from . import codecontenttype_enum


@dataclass_json
@dataclass
class ApplicationCodeConfigurationDescription:
    code_content_description: Optional[codecontentdescription.CodeContentDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeContentDescription' }})
    code_content_type: codecontenttype_enum.CodeContentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeContentType' }})
    
