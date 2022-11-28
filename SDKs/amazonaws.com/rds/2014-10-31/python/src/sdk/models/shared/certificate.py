from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Certificate:
    r"""Certificate
    A CA certificate for an Amazon Web Services account.
    """
    
    certificate_arn: Optional[str] = field(default=None)
    certificate_identifier: Optional[str] = field(default=None)
    certificate_type: Optional[str] = field(default=None)
    customer_override: Optional[bool] = field(default=None)
    customer_override_valid_till: Optional[datetime] = field(default=None)
    thumbprint: Optional[str] = field(default=None)
    valid_from: Optional[datetime] = field(default=None)
    valid_till: Optional[datetime] = field(default=None)
    
