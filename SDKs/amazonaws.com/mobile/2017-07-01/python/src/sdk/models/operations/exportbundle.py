from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ExportBundlePathParams:
    bundle_id: str = field(default=None, metadata={'path_param': { 'field_name': 'bundleId', 'style': 'simple', 'explode': False }})
    
class ExportBundlePlatformEnum(str, Enum):
    OSX = "OSX"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    OBJC = "OBJC"
    SWIFT = "SWIFT"
    ANDROID = "ANDROID"
    JAVASCRIPT = "JAVASCRIPT"


@dataclass
class ExportBundleQueryParams:
    platform: Optional[ExportBundlePlatformEnum] = field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportBundleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportBundleRequest:
    path_params: ExportBundlePathParams = field(default=None)
    query_params: ExportBundleQueryParams = field(default=None)
    headers: ExportBundleHeaders = field(default=None)
    

@dataclass
class ExportBundleResponse:
    bad_request_exception: Optional[shared.BadRequestException] = field(default=None)
    content_type: str = field(default=None)
    export_bundle_result: Optional[shared.ExportBundleResult] = field(default=None)
    internal_failure_exception: Optional[shared.InternalFailureException] = field(default=None)
    not_found_exception: Optional[shared.NotFoundException] = field(default=None)
    service_unavailable_exception: Optional[shared.ServiceUnavailableException] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[shared.TooManyRequestsException] = field(default=None)
    unauthorized_exception: Optional[shared.UnauthorizedException] = field(default=None)
    
