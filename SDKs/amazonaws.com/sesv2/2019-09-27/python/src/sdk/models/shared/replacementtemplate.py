from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplacementTemplate:
    r"""ReplacementTemplate
    An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.
    """
    
    replacement_template_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementTemplateData') }})
    
