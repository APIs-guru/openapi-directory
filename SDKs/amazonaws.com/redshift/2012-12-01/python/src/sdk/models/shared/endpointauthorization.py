from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class EndpointAuthorization:
    r"""EndpointAuthorization
    Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.
    """
    
    allowed_all_vp_cs: Optional[bool] = field(default=None)
    allowed_vp_cs: Optional[List[str]] = field(default=None)
    authorize_time: Optional[datetime] = field(default=None)
    cluster_identifier: Optional[str] = field(default=None)
    cluster_status: Optional[str] = field(default=None)
    endpoint_count: Optional[int] = field(default=None)
    grantee: Optional[str] = field(default=None)
    grantor: Optional[str] = field(default=None)
    status: Optional[AuthorizationStatusEnum] = field(default=None)
    
