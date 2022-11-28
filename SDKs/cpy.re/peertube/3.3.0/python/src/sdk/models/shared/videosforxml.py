from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from . import *

class VideosForXMLEnclosureTypeEnum(str, Enum):
    APPLICATION_X_BITTORRENT = "application/x-bittorrent"


@dataclass
class VideosForXMLEnclosure:
    r"""VideosForXMLEnclosure
    main streamable file for the video
    """
    
    length: Optional[int] = field(default=None)
    type: Optional[VideosForXMLEnclosureTypeEnum] = field(default=None)
    url: Optional[str] = field(default=None)
    

@dataclass
class VideosForXMLMediaCommunityMediaStatistics:
    views: Optional[int] = field(default=None)
    

@dataclass
class VideosForXMLMediaCommunity:
    r"""VideosForXMLMediaCommunity
    see [media:community](https://www.rssboard.org/media-rss#media-community) (MRSS)
    """
    
    media_statistics: Optional[VideosForXMLMediaCommunityMediaStatistics] = field(default=None)
    

@dataclass
class VideosForXMLMediaEmbed:
    url: Optional[str] = field(default=None)
    

@dataclass
class VideosForXMLMediaPlayer:
    url: Optional[str] = field(default=None)
    
class VideosForXMLMediaRatingEnum(str, Enum):
    NONADULT = "nonadult"
    ADULT = "adult"


@dataclass
class VideosForXMLMediaThumbnail:
    height: Optional[int] = field(default=None)
    url: Optional[str] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class VideosForXML:
    content_encoded: Optional[str] = field(default=None)
    dc_creator: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    enclosure: Optional[VideosForXMLEnclosure] = field(default=None)
    guid: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    media_category: Optional[int] = field(default=None)
    media_community: Optional[VideosForXMLMediaCommunity] = field(default=None)
    media_description: Optional[str] = field(default=None)
    media_embed: Optional[VideosForXMLMediaEmbed] = field(default=None)
    media_group: Optional[List[Any]] = field(default=None)
    media_player: Optional[VideosForXMLMediaPlayer] = field(default=None)
    media_rating: Optional[VideosForXMLMediaRatingEnum] = field(default=None)
    media_thumbnail: Optional[VideosForXMLMediaThumbnail] = field(default=None)
    media_title: Optional[str] = field(default=None)
    pub_date: Optional[datetime] = field(default=None)
    
