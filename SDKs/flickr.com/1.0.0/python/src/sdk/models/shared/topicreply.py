from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TopicReplyMessage:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class TopicReply:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    author_is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_is_deleted' }})
    author_path_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_path_alias' }})
    authorname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorname' }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_delete' }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit' }})
    datecreate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datecreate' }})
    iconfarm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconfarm' }})
    iconserver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconserver' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_pro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_pro' }})
    lastedit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastedit' }})
    message: Optional[TopicReplyMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
