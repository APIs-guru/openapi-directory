from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationCodeConfigurationDescription:
    r"""ApplicationCodeConfigurationDescription
    Describes code configuration for an application.
    """
    
    code_content_type: CodeContentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeContentType') }})
    code_content_description: Optional[CodeContentDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeContentDescription') }})
    
