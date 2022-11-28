from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ExportBundlePathParams:
    bundle_id: str = field(metadata={'path_param': { 'field_name': 'bundleId', 'style': 'simple', 'explode': False }})
    
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
    headers: ExportBundleHeaders = field()
    path_params: ExportBundlePathParams = field()
    query_params: ExportBundleQueryParams = field()
    

@dataclass
class ExportBundleResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[shared.BadRequestException] = field(default=None)
    export_bundle_result: Optional[shared.ExportBundleResult] = field(default=None)
    internal_failure_exception: Optional[shared.InternalFailureException] = field(default=None)
    not_found_exception: Optional[shared.NotFoundException] = field(default=None)
    service_unavailable_exception: Optional[shared.ServiceUnavailableException] = field(default=None)
    too_many_requests_exception: Optional[shared.TooManyRequestsException] = field(default=None)
    unauthorized_exception: Optional[shared.UnauthorizedException] = field(default=None)
    
