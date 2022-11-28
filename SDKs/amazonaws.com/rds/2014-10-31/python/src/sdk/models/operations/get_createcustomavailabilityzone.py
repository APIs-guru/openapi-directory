from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateCustomAvailabilityZoneActionEnum(str, Enum):
    CREATE_CUSTOM_AVAILABILITY_ZONE = "CreateCustomAvailabilityZone"

class GetCreateCustomAvailabilityZoneVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetCreateCustomAvailabilityZoneQueryParams:
    action: GetCreateCustomAvailabilityZoneActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    custom_availability_zone_name: str = field(metadata={'query_param': { 'field_name': 'CustomAvailabilityZoneName', 'style': 'form', 'explode': True }})
    version: GetCreateCustomAvailabilityZoneVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    existing_vpn_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ExistingVpnId', 'style': 'form', 'explode': True }})
    new_vpn_tunnel_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewVpnTunnelName', 'style': 'form', 'explode': True }})
    vpn_tunnel_originator_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpnTunnelOriginatorIP', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateCustomAvailabilityZoneHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateCustomAvailabilityZoneRequest:
    headers: GetCreateCustomAvailabilityZoneHeaders = field()
    query_params: GetCreateCustomAvailabilityZoneQueryParams = field()
    

@dataclass
class GetCreateCustomAvailabilityZoneResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
