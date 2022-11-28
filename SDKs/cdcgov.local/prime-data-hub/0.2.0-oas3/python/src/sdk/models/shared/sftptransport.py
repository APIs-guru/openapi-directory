from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SftpTransport:
    r"""SftpTransport
    Describes a single SFTP connection in all of it variations
    """
    
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
