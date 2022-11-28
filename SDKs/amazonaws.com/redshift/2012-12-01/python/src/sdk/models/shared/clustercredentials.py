from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ClusterCredentials:
    r"""ClusterCredentials
    Temporary credentials with authorization to log on to an Amazon Redshift database. 
    """
    
    db_password: Optional[str] = field(default=None)
    db_user: Optional[str] = field(default=None)
    expiration: Optional[datetime] = field(default=None)
    
