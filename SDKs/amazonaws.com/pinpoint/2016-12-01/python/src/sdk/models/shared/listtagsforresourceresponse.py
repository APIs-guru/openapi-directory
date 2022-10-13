from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tagsmodel


@dataclass_json
@dataclass
class ListTagsForResourceResponse:
    tags_model: tagsmodel.TagsModel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagsModel' }})
    
