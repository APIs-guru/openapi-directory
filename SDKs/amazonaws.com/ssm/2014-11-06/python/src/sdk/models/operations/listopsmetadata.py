from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListOpsMetadataQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListOpsMetadataXAmzTargetEnum(str, Enum):
    AMAZON_SSM_LIST_OPS_METADATA = "AmazonSSM.ListOpsMetadata"


@dataclass
class ListOpsMetadataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListOpsMetadataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListOpsMetadataRequest:
    query_params: ListOpsMetadataQueryParams = field(default=None)
    headers: ListOpsMetadataHeaders = field(default=None)
    request: shared.ListOpsMetadataRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListOpsMetadataResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    list_ops_metadata_result: Optional[shared.ListOpsMetadataResult] = field(default=None)
    ops_metadata_invalid_argument_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
