from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetJournalEntriesPathParams:
    telephony_conversation_id: str = field(metadata={'path_param': { 'field_name': 'telephonyConversationId', 'style': 'simple', 'explode': False }})
    
class GetJournalEntriesDirectionEnum(str, Enum):
    AFTER = "AFTER"
    BEFORE = "BEFORE"
    BOTH = "BOTH"

class GetJournalEntriesJournalFilterEnum(str, Enum):
    ALL = "ALL"
    MISSED = "MISSED"
    DIALED = "DIALED"
    RECEIVED = "RECEIVED"
    DIVERTED = "DIVERTED"
    VOICEMAILS = "VOICEMAILS"
    UNHERAD_VOICEMAILS = "UNHERAD_VOICEMAILS"


@dataclass
class GetJournalEntriesQueryParams:
    direction: Optional[GetJournalEntriesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    journal_filter: Optional[GetJournalEntriesJournalFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'journalFilter', 'style': 'form', 'explode': True }})
    number_of_entries: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfEntries', 'style': 'form', 'explode': True }})
    timestamp: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJournalEntriesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetJournalEntriesRequest:
    path_params: GetJournalEntriesPathParams = field()
    query_params: GetJournalEntriesQueryParams = field()
    security: GetJournalEntriesSecurity = field()
    

@dataclass
class GetJournalEntriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_items: Optional[List[Any]] = field(default=None)
    
