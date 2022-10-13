from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import athenaresultcompressiontype_enum
from . import athenaresultformat_enum


@dataclass_json
@dataclass
class AthenaDatasetDefinition:
    catalog: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Catalog' }})
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    output_compression: Optional[athenaresultcompressiontype_enum.AthenaResultCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputCompression' }})
    output_format: athenaresultformat_enum.AthenaResultFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputFormat' }})
    output_s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3Uri' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryString' }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
