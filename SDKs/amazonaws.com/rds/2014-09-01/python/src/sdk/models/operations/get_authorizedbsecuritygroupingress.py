from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAuthorizeDbSecurityGroupIngressActionEnum(str, Enum):
    AUTHORIZE_DB_SECURITY_GROUP_INGRESS = "AuthorizeDBSecurityGroupIngress"

class GetAuthorizeDbSecurityGroupIngressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_09_01 = "2014-09-01"


@dataclass
class GetAuthorizeDbSecurityGroupIngressQueryParams:
    action: GetAuthorizeDbSecurityGroupIngressActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cidrip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CIDRIP', 'style': 'form', 'explode': True }})
    db_security_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBSecurityGroupName', 'style': 'form', 'explode': True }})
    ec2_security_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupId', 'style': 'form', 'explode': True }})
    ec2_security_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupName', 'style': 'form', 'explode': True }})
    ec2_security_group_owner_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EC2SecurityGroupOwnerId', 'style': 'form', 'explode': True }})
    version: GetAuthorizeDbSecurityGroupIngressVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuthorizeDbSecurityGroupIngressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAuthorizeDbSecurityGroupIngressRequest:
    query_params: GetAuthorizeDbSecurityGroupIngressQueryParams = field(default=None)
    headers: GetAuthorizeDbSecurityGroupIngressHeaders = field(default=None)
    

@dataclass
class GetAuthorizeDbSecurityGroupIngressResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
