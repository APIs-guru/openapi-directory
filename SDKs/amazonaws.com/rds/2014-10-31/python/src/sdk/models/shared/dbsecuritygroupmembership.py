from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbSecurityGroupMembership:
    r"""DbSecurityGroupMembership
    <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul>
    """
    
    db_security_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
