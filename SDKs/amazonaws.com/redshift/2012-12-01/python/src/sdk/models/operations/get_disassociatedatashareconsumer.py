from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDisassociateDataShareConsumerActionEnum(str, Enum):
    DISASSOCIATE_DATA_SHARE_CONSUMER = "DisassociateDataShareConsumer"

class GetDisassociateDataShareConsumerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDisassociateDataShareConsumerQueryParams:
    action: GetDisassociateDataShareConsumerActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    consumer_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ConsumerArn', 'style': 'form', 'explode': True }})
    data_share_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'DataShareArn', 'style': 'form', 'explode': True }})
    disassociate_entire_account: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DisassociateEntireAccount', 'style': 'form', 'explode': True }})
    version: GetDisassociateDataShareConsumerVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDisassociateDataShareConsumerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDisassociateDataShareConsumerRequest:
    query_params: GetDisassociateDataShareConsumerQueryParams = field(default=None)
    headers: GetDisassociateDataShareConsumerHeaders = field(default=None)
    

@dataclass
class GetDisassociateDataShareConsumerResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
