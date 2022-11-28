from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedshiftDatasetDefinition:
    r"""RedshiftDatasetDefinition
    Configuration for Redshift Dataset Definition input.
    """
    
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    cluster_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterRoleArn') }})
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    db_user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    output_format: RedshiftResultFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFormat') }})
    output_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3Uri') }})
    query_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryString') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    output_compression: Optional[RedshiftResultCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputCompression') }})
    
