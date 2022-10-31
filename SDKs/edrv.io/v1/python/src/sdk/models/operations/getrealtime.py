from dataclasses import dataclass, field



@dataclass
class GetRealtimeHeaders:
    sec_websocket_protocol: str = field(default=None, metadata={'header': { 'field_name': 'sec-websocket-protocol', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealtimeRequest:
    headers: GetRealtimeHeaders = field(default=None)
    

@dataclass
class GetRealtimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
