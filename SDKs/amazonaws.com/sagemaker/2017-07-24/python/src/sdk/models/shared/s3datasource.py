from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import s3datadistribution_enum
from . import s3datatype_enum


@dataclass_json
@dataclass
class S3DataSource:
    attribute_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeNames' }})
    s3_data_distribution_type: Optional[s3datadistribution_enum.S3DataDistributionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataDistributionType' }})
    s3_data_type: s3datatype_enum.S3DataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataType' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
