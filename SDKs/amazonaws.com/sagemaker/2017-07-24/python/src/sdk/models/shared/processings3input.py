from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import processings3compressiontype_enum
from . import processings3datadistributiontype_enum
from . import processings3datatype_enum
from . import processings3inputmode_enum


@dataclass_json
@dataclass
class ProcessingS3Input:
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPath' }})
    s3_compression_type: Optional[processings3compressiontype_enum.ProcessingS3CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3CompressionType' }})
    s3_data_distribution_type: Optional[processings3datadistributiontype_enum.ProcessingS3DataDistributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataDistributionType' }})
    s3_data_type: processings3datatype_enum.ProcessingS3DataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataType' }})
    s3_input_mode: Optional[processings3inputmode_enum.ProcessingS3InputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3InputMode' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
