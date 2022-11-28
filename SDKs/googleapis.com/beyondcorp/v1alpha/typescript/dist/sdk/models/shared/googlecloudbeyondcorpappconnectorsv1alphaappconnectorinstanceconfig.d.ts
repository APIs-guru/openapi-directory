import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig } from "./googlecloudbeyondcorpappconnectorsv1alphaimageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1alphanotificationconfig";
/**
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig extends SpeakeasyBase {
    imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig;
    instanceConfig?: Map<string, any>;
    notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig;
    sequenceNumber?: string;
}
