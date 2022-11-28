from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Endpoint:
    r"""Endpoint
    <p>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> </ul> <p>For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
    """
    
    address: Optional[str] = field(default=None)
    hosted_zone_id: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    
