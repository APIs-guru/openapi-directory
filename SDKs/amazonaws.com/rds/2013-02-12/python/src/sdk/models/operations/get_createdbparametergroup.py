from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateDbParameterGroupActionEnum(str, Enum):
    CREATE_DB_PARAMETER_GROUP = "CreateDBParameterGroup"

class GetCreateDbParameterGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetCreateDbParameterGroupQueryParams:
    action: GetCreateDbParameterGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_parameter_group_family: str = field(metadata={'query_param': { 'field_name': 'DBParameterGroupFamily', 'style': 'form', 'explode': True }})
    db_parameter_group_name: str = field(metadata={'query_param': { 'field_name': 'DBParameterGroupName', 'style': 'form', 'explode': True }})
    description: str = field(metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    version: GetCreateDbParameterGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateDbParameterGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateDbParameterGroupRequest:
    headers: GetCreateDbParameterGroupHeaders = field()
    query_params: GetCreateDbParameterGroupQueryParams = field()
    

@dataclass
class GetCreateDbParameterGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
