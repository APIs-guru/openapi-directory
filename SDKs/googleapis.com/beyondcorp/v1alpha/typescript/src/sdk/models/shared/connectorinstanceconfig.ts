import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageConfig } from "./imageconfig";
import { NotificationConfig } from "./notificationconfig";


// ConnectorInstanceConfig
/** 
 * ConnectorInstanceConfig defines the instance config of a connector.
**/
export class ConnectorInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageConfig" })
  imageConfig?: ImageConfig;

  @Metadata({ data: "json, name=instanceConfig" })
  instanceConfig?: Map<string, any>;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;
}
