from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class DestinyEntitiesItemsDestinyItemComponentMetricObjective:
    r"""DestinyEntitiesItemsDestinyItemComponentMetricObjective
    The objective progress for the currently-selected metric definition, to be displayed on the emblem nameplate.
    """
    
    activity_hash: Optional[int] = field(default=None)
    complete: Optional[bool] = field(default=None)
    completion_value: Optional[int] = field(default=None)
    destination_hash: Optional[int] = field(default=None)
    objective_hash: Optional[int] = field(default=None)
    progress: Optional[int] = field(default=None)
    visible: Optional[bool] = field(default=None)
    

@dataclass
class DestinyEntitiesItemsDestinyItemComponent:
    r"""DestinyEntitiesItemsDestinyItemComponent
    The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
    """
    
    bind_status: Optional[int] = field(default=None)
    bucket_hash: Optional[int] = field(default=None)
    expiration_date: Optional[datetime] = field(default=None)
    is_wrapper: Optional[bool] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    item_instance_id: Optional[int] = field(default=None)
    item_value_visibility: Optional[List[bool]] = field(default=None)
    location: Optional[int] = field(default=None)
    lockable: Optional[bool] = field(default=None)
    metric_hash: Optional[int] = field(default=None)
    metric_objective: Optional[DestinyEntitiesItemsDestinyItemComponentMetricObjective] = field(default=None)
    override_style_item_hash: Optional[int] = field(default=None)
    quantity: Optional[int] = field(default=None)
    state: Optional[int] = field(default=None)
    tooltip_notification_indexes: Optional[List[int]] = field(default=None)
    transfer_status: Optional[int] = field(default=None)
    version_number: Optional[int] = field(default=None)
    
