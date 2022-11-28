import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
**/
export declare class Greengrass extends SpeakeasyBase {
    groupArn: string;
}
