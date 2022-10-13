from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteAssociationRequest:
    destination_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationArn' }})
    source_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    
