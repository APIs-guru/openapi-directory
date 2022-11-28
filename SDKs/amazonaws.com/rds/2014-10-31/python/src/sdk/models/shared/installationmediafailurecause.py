from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstallationMediaFailureCause:
    r"""InstallationMediaFailureCause
    Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
    """
    
    message: Optional[str] = field(default=None)
    
