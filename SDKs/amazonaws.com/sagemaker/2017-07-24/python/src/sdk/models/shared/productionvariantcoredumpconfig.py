from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductionVariantCoreDumpConfig:
    destination_s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationS3Uri' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    
