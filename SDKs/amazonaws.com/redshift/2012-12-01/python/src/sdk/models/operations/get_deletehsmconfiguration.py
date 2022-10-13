from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteHsmConfigurationActionEnum(str, Enum):
    DELETE_HSM_CONFIGURATION = "DeleteHsmConfiguration"

class GetDeleteHsmConfigurationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDeleteHsmConfigurationQueryParams:
    action: GetDeleteHsmConfigurationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    hsm_configuration_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'HsmConfigurationIdentifier', 'style': 'form', 'explode': True }})
    version: GetDeleteHsmConfigurationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteHsmConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteHsmConfigurationRequest:
    query_params: GetDeleteHsmConfigurationQueryParams = field(default=None)
    headers: GetDeleteHsmConfigurationHeaders = field(default=None)
    

@dataclass
class GetDeleteHsmConfigurationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
