from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Meta:
    r"""Meta
    The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
    
    """
    
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_id') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
