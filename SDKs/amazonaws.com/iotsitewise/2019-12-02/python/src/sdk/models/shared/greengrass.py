from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Greengrass:
    r"""Greengrass
    Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to IoT SiteWise. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html\">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
    """
    
    group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupArn') }})
    
