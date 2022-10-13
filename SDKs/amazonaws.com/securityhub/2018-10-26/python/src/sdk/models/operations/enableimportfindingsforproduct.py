from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnableImportFindingsForProductHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class EnableImportFindingsForProductRequestBody:
    product_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductArn' }})
    

@dataclass
class EnableImportFindingsForProductRequest:
    headers: EnableImportFindingsForProductHeaders = field(default=None)
    request: EnableImportFindingsForProductRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnableImportFindingsForProductResponse:
    content_type: str = field(default=None)
    enable_import_findings_for_product_response: Optional[shared.EnableImportFindingsForProductResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_access_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
