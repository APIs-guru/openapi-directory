from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PinpointDestination:
    r"""PinpointDestination
    An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href=\"https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html\">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.
    """
    
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationArn') }})
    
