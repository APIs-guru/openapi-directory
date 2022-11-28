from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.
    """
    
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterArn') }})
    cluster_endpoints: Optional[List[ClusterEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpoints') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
