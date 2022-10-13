from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteBotAliasPathParams:
    bot_alias_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botAliasId', 'style': 'simple', 'explode': False }})
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBotAliasQueryParams:
    skip_resource_in_use_check: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'skipResourceInUseCheck', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteBotAliasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteBotAliasRequest:
    path_params: DeleteBotAliasPathParams = field(default=None)
    query_params: DeleteBotAliasQueryParams = field(default=None)
    headers: DeleteBotAliasHeaders = field(default=None)
    

@dataclass
class DeleteBotAliasResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_bot_alias_response: Optional[shared.DeleteBotAliasResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
