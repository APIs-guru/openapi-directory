from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAcceptReservedNodeExchangeActionEnum(str, Enum):
    ACCEPT_RESERVED_NODE_EXCHANGE = "AcceptReservedNodeExchange"

class GetAcceptReservedNodeExchangeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetAcceptReservedNodeExchangeQueryParams:
    action: GetAcceptReservedNodeExchangeActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    reserved_node_id: str = field(metadata={'query_param': { 'field_name': 'ReservedNodeId', 'style': 'form', 'explode': True }})
    target_reserved_node_offering_id: str = field(metadata={'query_param': { 'field_name': 'TargetReservedNodeOfferingId', 'style': 'form', 'explode': True }})
    version: GetAcceptReservedNodeExchangeVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAcceptReservedNodeExchangeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAcceptReservedNodeExchangeRequest:
    headers: GetAcceptReservedNodeExchangeHeaders = field()
    query_params: GetAcceptReservedNodeExchangeQueryParams = field()
    

@dataclass
class GetAcceptReservedNodeExchangeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
