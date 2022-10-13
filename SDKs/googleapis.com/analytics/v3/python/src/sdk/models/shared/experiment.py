from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExperimentParentLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ExperimentVariations:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    won: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'won' }})
    

@dataclass_json
@dataclass
class Experiment:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    editable_in_ga_ui: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editableInGaUi' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    equal_weighting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equalWeighting' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalWebPropertyId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    minimum_experiment_length_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumExperimentLengthInDays' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    objective_metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectiveMetric' }})
    optimization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationType' }})
    parent_link: Optional[ExperimentParentLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLink' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    reason_experiment_ended: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonExperimentEnded' }})
    rewrite_variation_urls_as_original: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rewriteVariationUrlsAsOriginal' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    serving_framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingFramework' }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    traffic_coverage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficCoverage' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    variations: Optional[List[ExperimentVariations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variations' }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    winner_confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'winnerConfidenceLevel' }})
    winner_found: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'winnerFound' }})
    
