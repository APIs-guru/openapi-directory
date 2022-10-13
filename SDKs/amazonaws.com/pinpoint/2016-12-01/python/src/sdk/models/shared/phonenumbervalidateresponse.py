from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import numbervalidateresponse


@dataclass_json
@dataclass
class PhoneNumberValidateResponse:
    number_validate_response: numbervalidateresponse.NumberValidateResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberValidateResponse' }})
    
