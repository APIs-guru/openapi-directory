from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PinpointDestination:
    r"""PinpointDestination
    An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
    """
    
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationArn') }})
    
