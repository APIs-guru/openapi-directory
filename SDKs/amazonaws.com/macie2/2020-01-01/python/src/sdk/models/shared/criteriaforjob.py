from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simplecriterionforjob
from . import tagcriterionforjob


@dataclass_json
@dataclass
class CriteriaForJob:
    simple_criterion: Optional[simplecriterionforjob.SimpleCriterionForJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleCriterion' }})
    tag_criterion: Optional[tagcriterionforjob.TagCriterionForJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagCriterion' }})
    
