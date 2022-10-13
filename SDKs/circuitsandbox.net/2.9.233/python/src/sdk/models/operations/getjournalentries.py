from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetJournalEntriesPathParams:
    telephony_conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'telephonyConversationId', 'style': 'simple', 'explode': False }})
    
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
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetJournalEntriesRequest:
    path_params: GetJournalEntriesPathParams = field(default=None)
    query_params: GetJournalEntriesQueryParams = field(default=None)
    security: GetJournalEntriesSecurity = field(default=None)
    

@dataclass
class GetJournalEntriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_items: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
