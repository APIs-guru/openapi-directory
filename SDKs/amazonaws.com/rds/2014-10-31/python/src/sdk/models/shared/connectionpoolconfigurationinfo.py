from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ConnectionPoolConfigurationInfo:
    r"""ConnectionPoolConfigurationInfo
    Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.
    """
    
    connection_borrow_timeout: Optional[int] = field(default=None)
    init_query: Optional[str] = field(default=None)
    max_connections_percent: Optional[int] = field(default=None)
    max_idle_connections_percent: Optional[int] = field(default=None)
    session_pinning_filters: Optional[List[str]] = field(default=None)
    
