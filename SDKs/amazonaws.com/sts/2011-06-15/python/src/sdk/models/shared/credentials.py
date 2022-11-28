from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class Credentials:
    r"""Credentials
    Amazon Web Services credentials for API authentication.
    """
    
    access_key_id: str = field()
    expiration: datetime = field()
    secret_access_key: str = field()
    session_token: str = field()
    
