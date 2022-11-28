from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyEndpointAccessActionEnum(str, Enum):
    MODIFY_ENDPOINT_ACCESS = "ModifyEndpointAccess"

class GetModifyEndpointAccessVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyEndpointAccessQueryParams:
    action: GetModifyEndpointAccessActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    endpoint_name: str = field(metadata={'query_param': { 'field_name': 'EndpointName', 'style': 'form', 'explode': True }})
    version: GetModifyEndpointAccessVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyEndpointAccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyEndpointAccessRequest:
    headers: GetModifyEndpointAccessHeaders = field()
    query_params: GetModifyEndpointAccessQueryParams = field()
    

@dataclass
class GetModifyEndpointAccessResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
