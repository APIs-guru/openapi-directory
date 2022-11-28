from dataclasses import dataclass, field
from enum import Enum

class JobTypeEnum(str, Enum):
    ACTIVITYPUB_FOLLOW = "activitypub-follow"
    ACTIVITYPUB_HTTP_BROADCAST = "activitypub-http-broadcast"
    ACTIVITYPUB_HTTP_FETCHER = "activitypub-http-fetcher"
    ACTIVITYPUB_HTTP_UNICAST = "activitypub-http-unicast"
    EMAIL = "email"
    VIDEO_TRANSCODING = "video-transcoding"
    VIDEO_FILE_IMPORT = "video-file-import"
    VIDEO_IMPORT = "video-import"
    VIDEOS_VIEWS = "videos-views"
    ACTIVITYPUB_REFRESHER = "activitypub-refresher"
    VIDEO_REDUNDANCY = "video-redundancy"
    VIDEO_LIVE_ENDING = "video-live-ending"

