from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliverabilitytestreport
from . import ispplacement
from . import placementstatistics
from . import tag


@dataclass_json
@dataclass
class GetDeliverabilityTestReportResponse:
    deliverability_test_report: deliverabilitytestreport.DeliverabilityTestReport = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliverabilityTestReport' }})
    isp_placements: List[ispplacement.IspPlacement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IspPlacements' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    overall_placement: placementstatistics.PlacementStatistics = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverallPlacement' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
