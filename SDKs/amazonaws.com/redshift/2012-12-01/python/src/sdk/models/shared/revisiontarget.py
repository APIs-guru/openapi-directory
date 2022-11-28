from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class RevisionTarget:
    r"""RevisionTarget
    Describes a <code>RevisionTarget</code>.
    """
    
    database_revision: Optional[str] = field(default=None)
    database_revision_release_date: Optional[datetime] = field(default=None)
    description: Optional[str] = field(default=None)
    
