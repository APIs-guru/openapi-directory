from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Timezone:
    r"""Timezone
    A time zone associated with a <code>DBInstance</code> or a <code>DBSnapshot</code>. This data type is an element in the response to the <code>DescribeDBInstances</code>, the <code>DescribeDBSnapshots</code>, and the <code>DescribeDBEngineVersions</code> actions. 
    """
    
    timezone_name: Optional[str] = field(default=None)
    
