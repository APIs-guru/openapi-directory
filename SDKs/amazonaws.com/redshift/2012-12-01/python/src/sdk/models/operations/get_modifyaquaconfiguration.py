from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyAquaConfigurationActionEnum(str, Enum):
    MODIFY_AQUA_CONFIGURATION = "ModifyAquaConfiguration"

class GetModifyAquaConfigurationAquaConfigurationStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    AUTO = "auto"

class GetModifyAquaConfigurationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyAquaConfigurationQueryParams:
    action: GetModifyAquaConfigurationActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyAquaConfigurationVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    aqua_configuration_status: Optional[GetModifyAquaConfigurationAquaConfigurationStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'AquaConfigurationStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyAquaConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyAquaConfigurationRequest:
    headers: GetModifyAquaConfigurationHeaders = field()
    query_params: GetModifyAquaConfigurationQueryParams = field()
    

@dataclass
class GetModifyAquaConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
