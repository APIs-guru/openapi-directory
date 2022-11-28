from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3OutputURL:
    r"""S3OutputURL
    A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the results of this request.
    """
    
    output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUrl') }})
    
