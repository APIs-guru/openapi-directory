from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class PartnerIntegrationInfo:
    r"""PartnerIntegrationInfo
    Describes a partner integration.
    """
    
    created_at: Optional[datetime] = field(default=None)
    database_name: Optional[str] = field(default=None)
    partner_name: Optional[str] = field(default=None)
    status: Optional[PartnerIntegrationStatusEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    updated_at: Optional[datetime] = field(default=None)
    
