from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeDataSharesForProducerActionEnum(str, Enum):
    DESCRIBE_DATA_SHARES_FOR_PRODUCER = "DescribeDataSharesForProducer"

class GetDescribeDataSharesForProducerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    AUTHORIZED = "AUTHORIZED"
    PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION"
    DEAUTHORIZED = "DEAUTHORIZED"
    REJECTED = "REJECTED"

class GetDescribeDataSharesForProducerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDescribeDataSharesForProducerQueryParams:
    action: GetDescribeDataSharesForProducerActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    producer_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ProducerArn', 'style': 'form', 'explode': True }})
    status: Optional[GetDescribeDataSharesForProducerStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    version: GetDescribeDataSharesForProducerVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeDataSharesForProducerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeDataSharesForProducerRequest:
    query_params: GetDescribeDataSharesForProducerQueryParams = field(default=None)
    headers: GetDescribeDataSharesForProducerHeaders = field(default=None)
    

@dataclass
class GetDescribeDataSharesForProducerResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
