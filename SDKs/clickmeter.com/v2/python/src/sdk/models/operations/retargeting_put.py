from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetargetingPutRequests:
    api_core_dto_retargeting_retargeting_script: Optional[shared.APICoreDtoRetargetingRetargetingScript] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_retargeting_retargeting_script1: Optional[shared.APICoreDtoRetargetingRetargetingScript] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_retargeting_retargeting_script2: Optional[shared.APICoreDtoRetargetingRetargetingScript] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class RetargetingPutRequest:
    request: RetargetingPutRequests = field(default=None)
    

@dataclass
class RetargetingPutResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
