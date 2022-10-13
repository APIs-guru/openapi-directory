from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import redshiftresultcompressiontype_enum
from . import redshiftresultformat_enum


@dataclass_json
@dataclass
class RedshiftDatasetDefinition:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    cluster_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterRoleArn' }})
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    db_user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    output_compression: Optional[redshiftresultcompressiontype_enum.RedshiftResultCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputCompression' }})
    output_format: redshiftresultformat_enum.RedshiftResultFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputFormat' }})
    output_s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3Uri' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryString' }})
    
