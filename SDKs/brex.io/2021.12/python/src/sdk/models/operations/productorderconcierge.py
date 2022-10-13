from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductOrderConciergeRequestBody:
    company_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    contact_email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactEmail' }})
    contact_phone: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'contactPhone' }})
    cost_confirmation: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'costConfirmation' }})
    country: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'country' }})
    financial_data: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'financialData' }})
    historic_information: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'historicInformation' }})
    information_requirements: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'informationRequirements' }})
    location_investigation: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'locationInvestigation' }})
    priority: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'priority' }})
    register_data: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'registerData' }})
    register_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'registerNumber' }})
    subject_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subjectId' }})
    

@dataclass
class ProductOrderConciergeSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductOrderConciergeRequest:
    request: Optional[ProductOrderConciergeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: ProductOrderConciergeSecurity = field(default=None)
    

@dataclass
class ProductOrderConciergeResponse:
    content_type: str = field(default=None)
    product_order_concierge_200_application_json_any: Optional[Any] = field(default=None)
    product_order_concierge_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
