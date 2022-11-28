from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobScopeTerm:
    r"""JobScopeTerm
    Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.
    """
    
    simple_scope_term: Optional[SimpleScopeTerm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleScopeTerm') }})
    tag_scope_term: Optional[TagScopeTerm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagScopeTerm') }})
    
