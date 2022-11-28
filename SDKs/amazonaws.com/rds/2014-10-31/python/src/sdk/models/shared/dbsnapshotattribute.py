from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DbSnapshotAttribute:
    r"""DbSnapshotAttribute
    <p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API.</p>
    """
    
    attribute_name: Optional[str] = field(default=None)
    attribute_values: Optional[List[str]] = field(default=None)
    
