import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1ImageConfig } from "./googlecloudbeyondcorpappconnectorsv1imageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfig";
/**
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig extends SpeakeasyBase {
    imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1ImageConfig;
    instanceConfig?: Map<string, any>;
    notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig;
    sequenceNumber?: string;
}
