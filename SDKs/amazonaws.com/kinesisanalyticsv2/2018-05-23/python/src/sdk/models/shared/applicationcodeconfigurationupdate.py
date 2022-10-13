from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import codecontenttype_enum
from . import codecontentupdate


@dataclass_json
@dataclass
class ApplicationCodeConfigurationUpdate:
    code_content_type_update: Optional[codecontenttype_enum.CodeContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeContentTypeUpdate' }})
    code_content_update: Optional[codecontentupdate.CodeContentUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeContentUpdate' }})
    
