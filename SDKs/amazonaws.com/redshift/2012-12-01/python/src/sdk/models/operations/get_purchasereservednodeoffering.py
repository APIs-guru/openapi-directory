from dataclasses import dataclass, field
from typing import Enum,Optional

class GetPurchaseReservedNodeOfferingActionEnum(str, Enum):
    PURCHASE_RESERVED_NODE_OFFERING = "PurchaseReservedNodeOffering"

class GetPurchaseReservedNodeOfferingVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetPurchaseReservedNodeOfferingQueryParams:
    action: GetPurchaseReservedNodeOfferingActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    node_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'NodeCount', 'style': 'form', 'explode': True }})
    reserved_node_offering_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ReservedNodeOfferingId', 'style': 'form', 'explode': True }})
    version: GetPurchaseReservedNodeOfferingVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPurchaseReservedNodeOfferingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetPurchaseReservedNodeOfferingRequest:
    query_params: GetPurchaseReservedNodeOfferingQueryParams = field(default=None)
    headers: GetPurchaseReservedNodeOfferingHeaders = field(default=None)
    

@dataclass
class GetPurchaseReservedNodeOfferingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
