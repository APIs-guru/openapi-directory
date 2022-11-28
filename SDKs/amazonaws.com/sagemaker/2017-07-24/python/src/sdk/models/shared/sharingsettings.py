from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SharingSettings:
    r"""SharingSettings
    Specifies options for sharing SageMaker Studio notebooks. These settings are specified as part of <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called, and as part of <code>UserSettings</code> when the <code>CreateUserProfile</code> API is called. When <code>SharingSettings</code> is not specified, notebook sharing isn't allowed.
    """
    
    notebook_output_option: Optional[NotebookOutputOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookOutputOption') }})
    s3_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3KmsKeyId') }})
    s3_output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    
