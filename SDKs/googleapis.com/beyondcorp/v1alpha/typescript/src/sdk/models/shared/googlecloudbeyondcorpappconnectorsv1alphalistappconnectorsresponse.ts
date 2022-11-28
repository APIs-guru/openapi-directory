import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnector";



// GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse
/** 
 * Response message for BeyondCorp.ListAppConnectors.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnectors", elemType: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector })
  appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
