from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllowedPublishers:
    r"""AllowedPublishers
    List of signing profiles that can sign a code package. 
    """
    
    signing_profile_version_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningProfileVersionArns') }})
    
