import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1ImageConfig } from "./googlecloudbeyondcorpappconnectorsv1imageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfig";



// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig
/** 
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageConfig" })
  imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1ImageConfig;

  @SpeakeasyMetadata({ data: "json, name=instanceConfig" })
  instanceConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;
}
