from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExportBundleResult:
    r"""ExportBundleResult
     Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources. 
    """
    
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUrl') }})
    
