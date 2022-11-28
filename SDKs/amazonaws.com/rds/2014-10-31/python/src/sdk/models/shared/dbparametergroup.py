from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbParameterGroup:
    r"""DbParameterGroup
    <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
    """
    
    db_parameter_group_arn: Optional[str] = field(default=None)
    db_parameter_group_family: Optional[str] = field(default=None)
    db_parameter_group_name: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
