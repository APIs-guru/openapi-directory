from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetResourceShareAssociationsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResourceShareAssociationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class GetResourceShareAssociationsRequestBodyAssociationStatusEnum(str, Enum):
    ASSOCIATING = "ASSOCIATING"
    ASSOCIATED = "ASSOCIATED"
    FAILED = "FAILED"
    DISASSOCIATING = "DISASSOCIATING"
    DISASSOCIATED = "DISASSOCIATED"

class GetResourceShareAssociationsRequestBodyAssociationTypeEnum(str, Enum):
    PRINCIPAL = "PRINCIPAL"
    RESOURCE = "RESOURCE"


@dataclass_json
@dataclass
class GetResourceShareAssociationsRequestBody:
    association_status: Optional[GetResourceShareAssociationsRequestBodyAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationStatus' }})
    association_type: GetResourceShareAssociationsRequestBodyAssociationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationType' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    resource_share_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArns' }})
    

@dataclass
class GetResourceShareAssociationsRequest:
    query_params: GetResourceShareAssociationsQueryParams = field(default=None)
    headers: GetResourceShareAssociationsHeaders = field(default=None)
    request: GetResourceShareAssociationsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetResourceShareAssociationsResponse:
    content_type: str = field(default=None)
    get_resource_share_associations_response: Optional[shared.GetResourceShareAssociationsResponse] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    malformed_arn_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
