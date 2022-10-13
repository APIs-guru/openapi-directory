from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import customermanageds3storage


@dataclass_json
@dataclass
class MultiLayerStorage:
    customer_managed_s3_storage: customermanageds3storage.CustomerManagedS3Storage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3Storage' }})
    
