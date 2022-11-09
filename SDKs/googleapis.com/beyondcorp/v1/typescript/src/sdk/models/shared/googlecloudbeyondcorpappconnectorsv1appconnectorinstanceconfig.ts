import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1ImageConfig } from "./googlecloudbeyondcorpappconnectorsv1imageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfig";


// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig
/** 
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageConfig" })
  imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1ImageConfig;

  @Metadata({ data: "json, name=instanceConfig" })
  instanceConfig?: Map<string, any>;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig;

  @Metadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;
}
