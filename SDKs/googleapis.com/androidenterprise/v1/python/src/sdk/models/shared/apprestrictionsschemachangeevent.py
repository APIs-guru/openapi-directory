from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppRestrictionsSchemaChangeEvent:
    r"""AppRestrictionsSchemaChangeEvent
    An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.
    """
    
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
