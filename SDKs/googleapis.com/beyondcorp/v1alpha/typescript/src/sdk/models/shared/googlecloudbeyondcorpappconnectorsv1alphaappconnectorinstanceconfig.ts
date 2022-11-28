import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig } from "./googlecloudbeyondcorpappconnectorsv1alphaimageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1alphanotificationconfig";



// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig
/** 
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageConfig" })
  imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig;

  @SpeakeasyMetadata({ data: "json, name=instanceConfig" })
  instanceConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;
}
