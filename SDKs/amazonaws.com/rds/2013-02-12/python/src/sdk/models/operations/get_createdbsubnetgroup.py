from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetCreateDbSubnetGroupActionEnum(str, Enum):
    CREATE_DB_SUBNET_GROUP = "CreateDBSubnetGroup"

class GetCreateDbSubnetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetCreateDbSubnetGroupQueryParams:
    action: GetCreateDbSubnetGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_subnet_group_description: str = field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupDescription', 'style': 'form', 'explode': True }})
    db_subnet_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupName', 'style': 'form', 'explode': True }})
    subnet_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'SubnetIds', 'style': 'form', 'explode': True }})
    version: GetCreateDbSubnetGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateDbSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateDbSubnetGroupRequest:
    query_params: GetCreateDbSubnetGroupQueryParams = field(default=None)
    headers: GetCreateDbSubnetGroupHeaders = field(default=None)
    

@dataclass
class GetCreateDbSubnetGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
