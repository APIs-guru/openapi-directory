from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetLaunchProfileInitializationPathParams:
    launch_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'launchProfileId', 'style': 'simple', 'explode': False }})
    studio_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLaunchProfileInitializationQueryParams:
    launch_profile_protocol_versions: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'launchProfileProtocolVersions', 'style': 'form', 'explode': True }})
    launch_purpose: str = field(default=None, metadata={'query_param': { 'field_name': 'launchPurpose', 'style': 'form', 'explode': True }})
    platform: str = field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLaunchProfileInitializationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLaunchProfileInitializationRequest:
    path_params: GetLaunchProfileInitializationPathParams = field(default=None)
    query_params: GetLaunchProfileInitializationQueryParams = field(default=None)
    headers: GetLaunchProfileInitializationHeaders = field(default=None)
    

@dataclass
class GetLaunchProfileInitializationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_launch_profile_initialization_response: Optional[shared.GetLaunchProfileInitializationResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
