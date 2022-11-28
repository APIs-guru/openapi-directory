from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class VideoCommentsForXML:
    content_encoded: Optional[str] = field(default=None)
    dc_creator: Optional[str] = field(default=None)
    guid: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    pub_date: Optional[datetime] = field(default=None)
    
