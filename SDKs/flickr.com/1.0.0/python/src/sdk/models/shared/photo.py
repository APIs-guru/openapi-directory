from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PhotoComments:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class PhotoDates:
    lastupdate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastupdate') }})
    posted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posted') }})
    taken: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taken') }})
    takengranularity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('takengranularity') }})
    takenunknown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('takenunknown') }})
    

@dataclass_json
@dataclass
class PhotoDescription:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class PhotoEditability:
    canaddmeta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canaddmeta') }})
    cancomment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancomment') }})
    

@dataclass_json
@dataclass
class PhotoNotes:
    note: Optional[List[Note]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclass_json
@dataclass
class PhotoPeople:
    haspeople: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('haspeople') }})
    

@dataclass_json
@dataclass
class PhotoPermissions:
    permaddmeta: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permaddmeta') }})
    permcomment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permcomment') }})
    

@dataclass_json
@dataclass
class PhotoPubliceditability:
    canaddmeta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canaddmeta') }})
    cancomment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancomment') }})
    

@dataclass_json
@dataclass
class PhotoTags:
    tag: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclass
class PhotoTitle:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class PhotoUrls:
    url: Optional[List[URL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PhotoUsage:
    canblog: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canblog') }})
    candownload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candownload') }})
    canprint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canprint') }})
    canshare: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canshare') }})
    

@dataclass_json
@dataclass
class PhotoVisibility:
    isfamily: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isfamily') }})
    isfriend: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isfriend') }})
    ispublic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ispublic') }})
    

@dataclass_json
@dataclass
class Photo:
    comments: Optional[PhotoComments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    dates: Optional[PhotoDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dates') }})
    dateuploaded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateuploaded') }})
    description: Optional[PhotoDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editability: Optional[PhotoEditability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editability') }})
    farm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('farm') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    isfavorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isfavorite') }})
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    media: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    notes: Optional[PhotoNotes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    originalsecret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalsecret') }})
    owner: Optional[Owner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    people: Optional[PhotoPeople] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('people') }})
    permissions: Optional[PhotoPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    publiceditability: Optional[PhotoPubliceditability] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publiceditability') }})
    rotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotation') }})
    safe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe') }})
    safety_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safety_level') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    tags: Optional[PhotoTags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[PhotoTitle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    urls: Optional[PhotoUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    usage: Optional[PhotoUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    views: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    visibility: Optional[PhotoVisibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
