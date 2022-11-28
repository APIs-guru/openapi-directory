from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeSigningConfig:
    r"""CodeSigningConfig
    Details about a <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html\">Code signing configuration</a>. 
    """
    
    allowed_publishers: AllowedPublishers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedPublishers') }})
    code_signing_config_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigArn') }})
    code_signing_config_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigId') }})
    code_signing_policies: CodeSigningPolicies = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningPolicies') }})
    last_modified: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
