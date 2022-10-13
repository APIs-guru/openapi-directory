from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliveryoptions
from . import reputationoptions
from . import sendingoptions
from . import suppressionoptions
from . import tag
from . import trackingoptions


@dataclass_json
@dataclass
class GetConfigurationSetResponse:
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSetName' }})
    delivery_options: Optional[deliveryoptions.DeliveryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryOptions' }})
    reputation_options: Optional[reputationoptions.ReputationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReputationOptions' }})
    sending_options: Optional[sendingoptions.SendingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingOptions' }})
    suppression_options: Optional[suppressionoptions.SuppressionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressionOptions' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    tracking_options: Optional[trackingoptions.TrackingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingOptions' }})
    
