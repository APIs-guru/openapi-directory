from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCreateCustomAvailabilityZoneActionEnum(str, Enum):
    CREATE_CUSTOM_AVAILABILITY_ZONE = "CreateCustomAvailabilityZone"

class GetCreateCustomAvailabilityZoneVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetCreateCustomAvailabilityZoneQueryParams:
    action: GetCreateCustomAvailabilityZoneActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    custom_availability_zone_name: str = field(default=None, metadata={'query_param': { 'field_name': 'CustomAvailabilityZoneName', 'style': 'form', 'explode': True }})
    existing_vpn_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ExistingVpnId', 'style': 'form', 'explode': True }})
    new_vpn_tunnel_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewVpnTunnelName', 'style': 'form', 'explode': True }})
    version: GetCreateCustomAvailabilityZoneVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpn_tunnel_originator_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpnTunnelOriginatorIP', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateCustomAvailabilityZoneHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateCustomAvailabilityZoneRequest:
    query_params: GetCreateCustomAvailabilityZoneQueryParams = field(default=None)
    headers: GetCreateCustomAvailabilityZoneHeaders = field(default=None)
    

@dataclass
class GetCreateCustomAvailabilityZoneResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
