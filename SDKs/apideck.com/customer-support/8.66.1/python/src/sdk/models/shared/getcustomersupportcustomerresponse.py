from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import customersupportcustomer


@dataclass_json
@dataclass
class GetCustomerSupportCustomerResponse:
    data: customersupportcustomer.CustomerSupportCustomer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    operation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    resource: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
