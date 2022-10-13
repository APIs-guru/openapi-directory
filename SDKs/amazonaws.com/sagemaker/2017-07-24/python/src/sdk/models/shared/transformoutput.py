from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assemblytype_enum


@dataclass_json
@dataclass
class TransformOutput:
    accept: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accept' }})
    assemble_with: Optional[assemblytype_enum.AssemblyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssembleWith' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    s3_output_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputPath' }})
    
