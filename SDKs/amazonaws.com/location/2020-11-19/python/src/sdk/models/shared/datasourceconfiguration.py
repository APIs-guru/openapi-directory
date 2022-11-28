from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceConfiguration:
    r"""DataSourceConfiguration
    <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href=\"https://aws.amazon.com/service-terms/\">AWS Service Terms</a> for Amazon Location Service.</p> </important>
    """
    
    intended_use: Optional[IntendedUseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntendedUse') }})
    
