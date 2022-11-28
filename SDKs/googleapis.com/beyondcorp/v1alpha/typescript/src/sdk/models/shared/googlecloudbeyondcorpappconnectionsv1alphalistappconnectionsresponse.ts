import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnection";



// GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ListAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnections", elemType: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection })
  appConnections?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
