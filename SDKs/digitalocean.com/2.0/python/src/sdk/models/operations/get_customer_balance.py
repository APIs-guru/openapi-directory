from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetCustomerBalance200ApplicationJSON:
    account_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_balance' }})
    generated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    month_to_date_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month_to_date_balance' }})
    month_to_date_usage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month_to_date_usage' }})
    

@dataclass_json
@dataclass
class GetCustomerBalance401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetCustomerBalanceResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_customer_balance_200_application_json_object: Optional[GetCustomerBalance200ApplicationJSON] = field(default=None)
    get_customer_balance_401_application_json_object: Optional[GetCustomerBalance401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
