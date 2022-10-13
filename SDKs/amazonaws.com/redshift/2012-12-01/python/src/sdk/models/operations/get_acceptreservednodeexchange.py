from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAcceptReservedNodeExchangeActionEnum(str, Enum):
    ACCEPT_RESERVED_NODE_EXCHANGE = "AcceptReservedNodeExchange"

class GetAcceptReservedNodeExchangeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetAcceptReservedNodeExchangeQueryParams:
    action: GetAcceptReservedNodeExchangeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    reserved_node_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ReservedNodeId', 'style': 'form', 'explode': True }})
    target_reserved_node_offering_id: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetReservedNodeOfferingId', 'style': 'form', 'explode': True }})
    version: GetAcceptReservedNodeExchangeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAcceptReservedNodeExchangeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAcceptReservedNodeExchangeRequest:
    query_params: GetAcceptReservedNodeExchangeQueryParams = field(default=None)
    headers: GetAcceptReservedNodeExchangeHeaders = field(default=None)
    

@dataclass
class GetAcceptReservedNodeExchangeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
