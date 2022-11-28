from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class XMLFormatSchemaSignatureKeyInfo:
    x509_data: Optional[Any] = field(default=None)
    

@dataclass
class XMLFormatSchemaSignature:
    key_info: XMLFormatSchemaSignatureKeyInfo = field()
    signature_value: Optional[Any] = field(default=None)
    signed_info: Optional[Any] = field(default=None)
    

@dataclass
class XMLFormatSchema:
    certificate_data: List[Any] = field()
    signature: XMLFormatSchemaSignature = field()
    
