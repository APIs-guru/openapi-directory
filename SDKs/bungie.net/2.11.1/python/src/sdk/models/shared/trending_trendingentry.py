from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class TrendingTrendingEntry:
    r"""TrendingTrendingEntry
    The list entry view for trending items. Returns just enough to show the item on the trending page.
    """
    
    creation_date: Optional[datetime] = field(default=None)
    display_name: Optional[str] = field(default=None)
    end_date: Optional[datetime] = field(default=None)
    entity_type: Optional[int] = field(default=None)
    feature_image: Optional[str] = field(default=None)
    identifier: Optional[str] = field(default=None)
    image: Optional[str] = field(default=None)
    is_featured: Optional[bool] = field(default=None)
    items: Optional[List[TrendingTrendingEntry]] = field(default=None)
    link: Optional[str] = field(default=None)
    mp4_video: Optional[str] = field(default=None)
    start_date: Optional[datetime] = field(default=None)
    tagline: Optional[str] = field(default=None)
    webm_video: Optional[str] = field(default=None)
    weight: Optional[float] = field(default=None)
    
