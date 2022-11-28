from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeReservedNodeOfferingsActionEnum(str, Enum):
    DESCRIBE_RESERVED_NODE_OFFERINGS = "DescribeReservedNodeOfferings"

class GetDescribeReservedNodeOfferingsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDescribeReservedNodeOfferingsQueryParams:
    action: GetDescribeReservedNodeOfferingsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeReservedNodeOfferingsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    reserved_node_offering_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReservedNodeOfferingId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeReservedNodeOfferingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeReservedNodeOfferingsRequest:
    headers: GetDescribeReservedNodeOfferingsHeaders = field()
    query_params: GetDescribeReservedNodeOfferingsQueryParams = field()
    

@dataclass
class GetDescribeReservedNodeOfferingsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
