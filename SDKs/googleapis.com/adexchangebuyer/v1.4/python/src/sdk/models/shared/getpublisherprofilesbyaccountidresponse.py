from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publisherprofileapiproto


@dataclass_json
@dataclass
class GetPublisherProfilesByAccountIDResponse:
    profiles: Optional[List[publisherprofileapiproto.PublisherProfileAPIProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profiles' }})
    
