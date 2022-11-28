from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceDataSyncDestinationDataSharing:
    r"""ResourceDataSyncDestinationDataSharing
    Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different Amazon Web Services account ID.
    """
    
    destination_data_sharing_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationDataSharingType') }})
    
