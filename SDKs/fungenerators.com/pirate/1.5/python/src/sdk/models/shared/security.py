from dataclasses import dataclass, field



@dataclass
class SchemeXFungeneratorsAPISecret:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-Fungenerators-Api-Secret' }})
    
