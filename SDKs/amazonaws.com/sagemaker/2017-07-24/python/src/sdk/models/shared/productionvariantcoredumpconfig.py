from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductionVariantCoreDumpConfig:
    r"""ProductionVariantCoreDumpConfig
    Specifies configuration for a core dump from the model container when the process crashes.
    """
    
    destination_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationS3Uri') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
