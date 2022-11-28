from dataclasses import dataclass, field



@dataclass
class SchemeAPIKeyHeader:
    api_key: str = field(metadata={'security': { 'field_name': 'x-api-key' }})
    
