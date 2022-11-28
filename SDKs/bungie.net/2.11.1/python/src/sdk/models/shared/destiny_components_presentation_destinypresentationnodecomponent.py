from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyComponentsPresentationDestinyPresentationNodeComponentObjective:
    r"""DestinyComponentsPresentationDestinyPresentationNodeComponentObjective
    An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
    """
    
    activity_hash: Optional[int] = field(default=None)
    complete: Optional[bool] = field(default=None)
    completion_value: Optional[int] = field(default=None)
    destination_hash: Optional[int] = field(default=None)
    objective_hash: Optional[int] = field(default=None)
    progress: Optional[int] = field(default=None)
    visible: Optional[bool] = field(default=None)
    

@dataclass
class DestinyComponentsPresentationDestinyPresentationNodeComponent:
    completion_value: Optional[int] = field(default=None)
    objective: Optional[DestinyComponentsPresentationDestinyPresentationNodeComponentObjective] = field(default=None)
    progress_value: Optional[int] = field(default=None)
    record_category_score: Optional[int] = field(default=None)
    state: Optional[int] = field(default=None)
    
