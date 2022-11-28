import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";
import { NotificationConfig } from "./notificationconfig";



// ConnectorInstanceConfig
/** 
 * ConnectorInstanceConfig defines the instance config of a connector.
**/
export class ConnectorInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageConfig" })
  imageConfig?: ImageConfig;

  @SpeakeasyMetadata({ data: "json, name=instanceConfig" })
  instanceConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;
}
