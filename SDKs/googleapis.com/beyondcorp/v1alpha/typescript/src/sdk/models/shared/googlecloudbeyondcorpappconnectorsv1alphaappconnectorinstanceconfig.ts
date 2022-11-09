import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig } from "./googlecloudbeyondcorpappconnectorsv1alphaimageconfig";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1alphanotificationconfig";


// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig
/** 
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageConfig" })
  imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig;

  @Metadata({ data: "json, name=instanceConfig" })
  instanceConfig?: Map<string, any>;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig;

  @Metadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;
}
