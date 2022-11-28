from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ApplicationsApplication:
    application_id: Optional[int] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    first_published: Optional[datetime] = field(default=None)
    link: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    origin: Optional[str] = field(default=None)
    redirect_url: Optional[str] = field(default=None)
    scope: Optional[int] = field(default=None)
    status: Optional[int] = field(default=None)
    status_changed: Optional[datetime] = field(default=None)
    team: Optional[List[ApplicationsApplicationDeveloper]] = field(default=None)
    
