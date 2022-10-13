from dataclasses import dataclass, field



@dataclass
class HealthGetQueueWebhooksSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthGetQueueWebhooksRequest:
    security: HealthGetQueueWebhooksSecurity = field(default=None)
    

@dataclass
class HealthGetQueueWebhooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
