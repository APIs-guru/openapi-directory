from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateHTTPNamespaceRequest:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    namespace: HTTPNamespaceChange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    updater_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdaterRequestId') }})
    
