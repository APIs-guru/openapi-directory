from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LensReviewReport:
    r"""LensReviewReport
    A report of a lens review.
    """
    
    base64_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Base64String') }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    
