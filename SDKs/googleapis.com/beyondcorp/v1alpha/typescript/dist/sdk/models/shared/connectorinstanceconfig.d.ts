import { SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";
import { NotificationConfig } from "./notificationconfig";
/**
 * ConnectorInstanceConfig defines the instance config of a connector.
**/
export declare class ConnectorInstanceConfig extends SpeakeasyBase {
    imageConfig?: ImageConfig;
    instanceConfig?: Map<string, any>;
    notificationConfig?: NotificationConfig;
    sequenceNumber?: string;
}
