from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GreengrassV2:
    r"""GreengrassV2
    Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html\">Greengrass device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html\">Using IoT SiteWise at the edge</a> in the <i>IoT SiteWise User Guide</i>.
    """
    
    core_device_thing_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coreDeviceThingName') }})
    
