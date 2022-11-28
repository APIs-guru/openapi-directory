from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AthenaDatasetDefinition:
    r"""AthenaDatasetDefinition
    Configuration for Athena Dataset Definition input.
    """
    
    catalog: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Catalog') }})
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    output_format: AthenaResultFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFormat') }})
    output_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3Uri') }})
    query_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryString') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    output_compression: Optional[AthenaResultCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputCompression') }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
