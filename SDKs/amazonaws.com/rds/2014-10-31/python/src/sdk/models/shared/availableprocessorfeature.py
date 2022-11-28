from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvailableProcessorFeature:
    r"""AvailableProcessorFeature
    <p>Contains the available processor feature information for the DB instance class of a DB instance.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor\">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>
    """
    
    allowed_values: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    
