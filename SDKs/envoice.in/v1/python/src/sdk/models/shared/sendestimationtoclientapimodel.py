from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendEstimationToClientAPIModel:
    attach_pdf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachPdf') }, 'form': { 'field_name': 'AttachPdf' }})
    estimation_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimationId') }, 'form': { 'field_name': 'EstimationId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }, 'form': { 'field_name': 'Message' }})
    send_to_self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendToSelf') }, 'form': { 'field_name': 'SendToSelf' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }, 'form': { 'field_name': 'Subject' }})
    
