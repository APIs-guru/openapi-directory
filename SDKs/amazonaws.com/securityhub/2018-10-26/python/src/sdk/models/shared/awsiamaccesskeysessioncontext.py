from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsiamaccesskeysessioncontextattributes
from . import awsiamaccesskeysessioncontextsessionissuer


@dataclass_json
@dataclass
class AwsIamAccessKeySessionContext:
    attributes: Optional[awsiamaccesskeysessioncontextattributes.AwsIamAccessKeySessionContextAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    session_issuer: Optional[awsiamaccesskeysessioncontextsessionissuer.AwsIamAccessKeySessionContextSessionIssuer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionIssuer' }})
    
