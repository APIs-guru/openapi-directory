from dataclasses import dataclass, field
from typing import Enum,List,Optional


@dataclass
class GetAddPermissionPathParams:
    account_number: int = field(default=None, metadata={'path_param': { 'field_name': 'AccountNumber', 'style': 'simple', 'explode': False }})
    queue_name: str = field(default=None, metadata={'path_param': { 'field_name': 'QueueName', 'style': 'simple', 'explode': False }})
    
class GetAddPermissionActionEnum(str, Enum):
    ADD_PERMISSION = "AddPermission"

class GetAddPermissionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_11_05 = "2012-11-05"


@dataclass
class GetAddPermissionQueryParams:
    aws_account_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'AWSAccountIds', 'style': 'form', 'explode': True }})
    action: GetAddPermissionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    actions: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'Actions', 'style': 'form', 'explode': True }})
    label: str = field(default=None, metadata={'query_param': { 'field_name': 'Label', 'style': 'form', 'explode': True }})
    version: GetAddPermissionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAddPermissionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddPermissionRequest:
    path_params: GetAddPermissionPathParams = field(default=None)
    query_params: GetAddPermissionQueryParams = field(default=None)
    headers: GetAddPermissionHeaders = field(default=None)
    

@dataclass
class GetAddPermissionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
