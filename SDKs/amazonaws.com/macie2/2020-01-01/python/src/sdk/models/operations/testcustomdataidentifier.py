from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TestCustomDataIdentifierHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TestCustomDataIdentifierRequestBody:
    ignore_words: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreWords' }})
    keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywords' }})
    maximum_match_distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumMatchDistance' }})
    regex: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    sample_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleText' }})
    

@dataclass
class TestCustomDataIdentifierRequest:
    headers: TestCustomDataIdentifierHeaders = field(default=None)
    request: TestCustomDataIdentifierRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestCustomDataIdentifierResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    test_custom_data_identifier_response: Optional[shared.TestCustomDataIdentifierResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
