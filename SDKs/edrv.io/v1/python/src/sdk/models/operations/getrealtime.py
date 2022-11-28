from dataclasses import dataclass, field



@dataclass
class GetRealtimeHeaders:
    sec_websocket_protocol: str = field(metadata={'header': { 'field_name': 'sec-websocket-protocol', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealtimeRequest:
    headers: GetRealtimeHeaders = field()
    

@dataclass
class GetRealtimeResponse:
    content_type: str = field()
    status_code: int = field()
    
