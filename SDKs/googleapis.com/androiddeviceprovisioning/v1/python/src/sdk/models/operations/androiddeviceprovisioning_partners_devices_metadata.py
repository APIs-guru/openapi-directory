from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AndroiddeviceprovisioningPartnersDevicesMetadataPathParams:
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    metadata_owner_id: str = field(metadata={'path_param': { 'field_name': 'metadataOwnerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroiddeviceprovisioningPartnersDevicesMetadataRequest:
    path_params: AndroiddeviceprovisioningPartnersDevicesMetadataPathParams = field()
    query_params: AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams = field()
    request: Optional[shared.UpdateDeviceMetadataRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AndroiddeviceprovisioningPartnersDevicesMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    device_metadata: Optional[shared.DeviceMetadata] = field(default=None)
    
