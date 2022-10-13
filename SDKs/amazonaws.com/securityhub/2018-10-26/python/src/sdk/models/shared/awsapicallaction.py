from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsapicallactiondomaindetails
from . import actionremoteipdetails


@dataclass_json
@dataclass
class AwsAPICallAction:
    affected_resources: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AffectedResources' }})
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Api' }})
    caller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallerType' }})
    domain_details: Optional[awsapicallactiondomaindetails.AwsAPICallActionDomainDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainDetails' }})
    first_seen: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstSeen' }})
    last_seen: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSeen' }})
    remote_ip_details: Optional[actionremoteipdetails.ActionRemoteIPDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteIpDetails' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    
