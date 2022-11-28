from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformOutput:
    r"""TransformOutput
    Describes the results of a transform job.
    """
    
    s3_output_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    accept: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accept') }})
    assemble_with: Optional[AssemblyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssembleWith') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
