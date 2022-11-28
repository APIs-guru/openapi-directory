from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum(str, Enum):
    API_PROXY_TYPE_UNSPECIFIED = "API_PROXY_TYPE_UNSPECIFIED"
    PROGRAMMABLE = "PROGRAMMABLE"
    CONFIGURABLE = "CONFIGURABLE"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1APIProxy:
    r"""GoogleCloudApigeeV1APIProxy
    Metadata describing the API proxy
    """
    
    api_proxy_type: Optional[GoogleCloudApigeeV1APIProxyAPIProxyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiProxyType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    latest_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRevisionId') }})
    meta_data: Optional[GoogleCloudApigeeV1EntityMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metaData') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    revision: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
