from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DbClusterEndpoint:
    r"""DbClusterEndpoint
    <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
    """
    
    custom_endpoint_type: Optional[str] = field(default=None)
    db_cluster_endpoint_arn: Optional[str] = field(default=None)
    db_cluster_endpoint_identifier: Optional[str] = field(default=None)
    db_cluster_endpoint_resource_identifier: Optional[str] = field(default=None)
    db_cluster_identifier: Optional[str] = field(default=None)
    endpoint: Optional[str] = field(default=None)
    endpoint_type: Optional[str] = field(default=None)
    excluded_members: Optional[List[str]] = field(default=None)
    static_members: Optional[List[str]] = field(default=None)
    status: Optional[str] = field(default=None)
    
