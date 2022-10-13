from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendInvoiceToClientAPIModel:
    attach_pdf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachPdf' }, 'form': { 'field_name': 'AttachPdf' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    invoice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceId' }, 'form': { 'field_name': 'InvoiceId' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }, 'form': { 'field_name': 'Message' }})
    send_to_self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendToSelf' }, 'form': { 'field_name': 'SendToSelf' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }, 'form': { 'field_name': 'Subject' }})
    
