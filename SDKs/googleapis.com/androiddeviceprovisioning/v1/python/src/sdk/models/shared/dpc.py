from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Dpc:
    r"""Dpc
    An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.
    """
    
    dpc_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpcName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
