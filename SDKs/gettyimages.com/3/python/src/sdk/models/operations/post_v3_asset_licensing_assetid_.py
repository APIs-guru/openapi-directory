from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV3AssetLicensingAssetIDPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV3AssetLicensingAssetIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV3AssetLicensingAssetIDRequests:
    acquire_asset_licenses_request: Optional[shared.AcquireAssetLicensesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    acquire_asset_licenses_request1: Optional[shared.AcquireAssetLicensesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    acquire_asset_licenses_request2: Optional[shared.AcquireAssetLicensesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    acquire_asset_licenses_request3: Optional[shared.AcquireAssetLicensesRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostV3AssetLicensingAssetIDRequest:
    headers: PostV3AssetLicensingAssetIDHeaders = field()
    path_params: PostV3AssetLicensingAssetIDPathParams = field()
    request: Optional[PostV3AssetLicensingAssetIDRequests] = field(default=None)
    

@dataclass
class PostV3AssetLicensingAssetIDResponse:
    content_type: str = field()
    status_code: int = field()
    asset_licensing_response: Optional[shared.AssetLicensingResponse] = field(default=None)
    
