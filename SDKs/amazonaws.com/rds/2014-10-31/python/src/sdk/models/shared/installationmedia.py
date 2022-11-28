from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class InstallationMedia:
    r"""InstallationMedia
    Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
    """
    
    custom_availability_zone_id: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_installation_media_path: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    failure_cause: Optional[InstallationMediaFailureCause] = field(default=None)
    installation_media_id: Optional[str] = field(default=None)
    os_installation_media_path: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
