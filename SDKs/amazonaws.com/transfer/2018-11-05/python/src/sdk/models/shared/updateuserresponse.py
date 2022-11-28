from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateUserResponse:
    r"""UpdateUserResponse
     <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.
    """
    
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
