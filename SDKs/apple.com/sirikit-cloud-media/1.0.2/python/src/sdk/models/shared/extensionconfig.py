from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum

class ExtensionConfigIntentAddMediaOptEnum(str, Enum):
    RESOLVE_MEDIA_DESTINATION = "resolveMediaDestination"
    CONFIRM = "confirm"


@dataclass
class ExtensionConfigIntentAddMedia:
    hdr: Optional[dict[str, Any]] = field(default=None)
    opt: Optional[List[ExtensionConfigIntentAddMediaOptEnum]] = field(default=None)
    url: Optional[str] = field(default=None)
    
class ExtensionConfigIntentPlayMediaOptEnum(str, Enum):
    RESOLVE_PLAY_SHUFFLED = "resolvePlayShuffled"
    RESOLVE_PLAYBACK_REPEAT_MODE = "resolvePlaybackRepeatMode"
    RESOLVE_PLAYBACK_QUEUE_LOCATION = "resolvePlaybackQueueLocation"
    RESOLVE_RESUME_PLAYBACK = "resolveResumePlayback"


@dataclass
class ExtensionConfigIntentPlayMedia:
    hdr: Optional[dict[str, Any]] = field(default=None)
    opt: Optional[List[ExtensionConfigIntentPlayMediaOptEnum]] = field(default=None)
    url: Optional[str] = field(default=None)
    
class ExtensionConfigIntentUpdateMediaAffinityOptEnum(str, Enum):
    RESOLVE_AFFINITY_TYPE = "resolveAffinityType"


@dataclass
class ExtensionConfigIntentUpdateMediaAffinity:
    hdr: Optional[dict[str, Any]] = field(default=None)
    opt: Optional[List[ExtensionConfigIntentUpdateMediaAffinityOptEnum]] = field(default=None)
    url: Optional[str] = field(default=None)
    

@dataclass
class ExtensionConfigIntent:
    play_media: ExtensionConfigIntentPlayMedia = field()
    add_media: Optional[ExtensionConfigIntentAddMedia] = field(default=None)
    hdr: Optional[dict[str, Any]] = field(default=None)
    update_media_affinity: Optional[ExtensionConfigIntentUpdateMediaAffinity] = field(default=None)
    

@dataclass
class ExtensionConfigMediaQueuesPlayMedia:
    hdr: Optional[dict[str, Any]] = field(default=None)
    url: Optional[str] = field(default=None)
    

@dataclass
class ExtensionConfigMediaQueuesUpdateActivity:
    hdr: Optional[dict[str, Any]] = field(default=None)
    url: Optional[str] = field(default=None)
    

@dataclass
class ExtensionConfigMediaQueues:
    hdr: Optional[dict[str, Any]] = field(default=None)
    play_media: Optional[ExtensionConfigMediaQueuesPlayMedia] = field(default=None)
    update_activity: Optional[ExtensionConfigMediaQueuesUpdateActivity] = field(default=None)
    

@dataclass
class ExtensionConfigMedia:
    queues: Optional[ExtensionConfigMediaQueues] = field(default=None)
    

@dataclass
class ExtensionConfig:
    intent: ExtensionConfigIntent = field()
    media: ExtensionConfigMedia = field()
    version: str = field()
    hdr: Optional[dict[str, Any]] = field(default=None)
    url: Optional[str] = field(default=None)
    
