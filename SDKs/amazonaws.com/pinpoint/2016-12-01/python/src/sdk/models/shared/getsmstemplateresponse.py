from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import smstemplateresponse


@dataclass_json
@dataclass
class GetSmsTemplateResponse:
    sms_template_response: smstemplateresponse.SmsTemplateResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMSTemplateResponse' }})
    
