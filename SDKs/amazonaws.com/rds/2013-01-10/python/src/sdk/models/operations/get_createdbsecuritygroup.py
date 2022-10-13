from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCreateDbSecurityGroupActionEnum(str, Enum):
    CREATE_DB_SECURITY_GROUP = "CreateDBSecurityGroup"

class GetCreateDbSecurityGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetCreateDbSecurityGroupQueryParams:
    action: GetCreateDbSecurityGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_security_group_description: str = field(default=None, metadata={'query_param': { 'field_name': 'DBSecurityGroupDescription', 'style': 'form', 'explode': True }})
    db_security_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBSecurityGroupName', 'style': 'form', 'explode': True }})
    version: GetCreateDbSecurityGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateDbSecurityGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateDbSecurityGroupRequest:
    query_params: GetCreateDbSecurityGroupQueryParams = field(default=None)
    headers: GetCreateDbSecurityGroupHeaders = field(default=None)
    

@dataclass
class GetCreateDbSecurityGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
