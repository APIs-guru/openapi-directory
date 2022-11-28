from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIDeployment:
    r"""APIDeployment
    Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
    """
    
    access_guidance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessGuidance') }})
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    api_spec_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSpecRevision') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    endpoint_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUri') }})
    external_channel_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalChannelUri') }})
    intended_audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedAudience') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    revision_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUpdateTime') }})
    

@dataclass_json
@dataclass
class APIDeploymentInput:
    r"""APIDeploymentInput
    Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
    """
    
    access_guidance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessGuidance') }})
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    api_spec_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSpecRevision') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    endpoint_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUri') }})
    external_channel_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalChannelUri') }})
    intended_audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedAudience') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
