from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SslConfiguration:
    r"""SslConfiguration
    Describes an app's SSL configuration.
    """
    
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    private_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKey') }})
    chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Chain') }})
    
