from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cover
from . import photourls


@dataclass_json
@dataclass
class PersonDescription:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonDisableKeyboardShortcuts:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonLocation:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonMboxSha1sum:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonMobileurl:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonPhotosCount:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonPhotosFirstdate:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonPhotosFirstdatetaken:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonPhotosViews:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonPhotos:
    count: Optional[PersonPhotosCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    firstdate: Optional[PersonPhotosFirstdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstdate' }})
    firstdatetaken: Optional[PersonPhotosFirstdatetaken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstdatetaken' }})
    views: Optional[PersonPhotosViews] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'views' }})
    

@dataclass_json
@dataclass
class PersonPhotosurl:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonProfileurl:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonRealname:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonTimezone:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    timezone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone_id' }})
    

@dataclass_json
@dataclass
class PersonUnreadMessages:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class PersonUsername:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    

@dataclass_json
@dataclass
class Person:
    can_buy_pro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_buy_pro' }})
    cover: Optional[cover.Cover] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cover' }})
    coverphoto: Optional[photourls.PhotoUrLs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverphoto' }})
    coverphoto_farm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverphoto_farm' }})
    coverphoto_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverphoto_server' }})
    description: Optional[PersonDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disable_keyboard_shortcuts: Optional[PersonDisableKeyboardShortcuts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disable_keyboard_shortcuts' }})
    expire: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire' }})
    has_stats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_stats' }})
    iconfarm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconfarm' }})
    iconserver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconserver' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_ad_free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_ad_free' }})
    ispro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ispro' }})
    location: Optional[PersonLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    mbox_sha1sum: Optional[PersonMboxSha1sum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mbox_sha1sum' }})
    mobileurl: Optional[PersonMobileurl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileurl' }})
    nsid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsid' }})
    path_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path_alias' }})
    photos: Optional[PersonPhotos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    photosurl: Optional[PersonPhotosurl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photosurl' }})
    profileurl: Optional[PersonProfileurl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileurl' }})
    realname: Optional[PersonRealname] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realname' }})
    timezone: Optional[PersonTimezone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    unread_messages: Optional[PersonUnreadMessages] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unread_messages' }})
    user_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_secret' }})
    username: Optional[PersonUsername] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    yintl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yintl' }})
    
