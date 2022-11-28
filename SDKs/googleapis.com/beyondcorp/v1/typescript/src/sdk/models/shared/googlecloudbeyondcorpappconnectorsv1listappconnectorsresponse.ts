import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnector } from "./googlecloudbeyondcorpappconnectorsv1appconnector";



// GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse
/** 
 * Response message for BeyondCorp.ListAppConnectors.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnectors", elemType: GoogleCloudBeyondcorpAppconnectorsV1AppConnector })
  appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1AppConnector[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
