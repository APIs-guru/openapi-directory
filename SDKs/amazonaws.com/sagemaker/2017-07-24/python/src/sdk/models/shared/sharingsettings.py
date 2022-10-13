from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notebookoutputoption_enum


@dataclass_json
@dataclass
class SharingSettings:
    notebook_output_option: Optional[notebookoutputoption_enum.NotebookOutputOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookOutputOption' }})
    s3_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3KmsKeyId' }})
    s3_output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputPath' }})
    
