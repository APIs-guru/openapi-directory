from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MultiLayerStorage:
    r"""MultiLayerStorage
    Contains information about the storage destination.
    """
    
    customer_managed_s3_storage: CustomerManagedS3Storage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3Storage') }})
    
