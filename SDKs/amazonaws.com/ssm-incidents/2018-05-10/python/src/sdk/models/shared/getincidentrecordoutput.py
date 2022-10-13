from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import incidentrecord


@dataclass_json
@dataclass
class GetIncidentRecordOutput:
    incident_record: incidentrecord.IncidentRecord = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentRecord' }})
    
