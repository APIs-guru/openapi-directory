from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppUpdateEvent:
    r"""AppUpdateEvent
    An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.
    """
    
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
