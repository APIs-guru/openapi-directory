import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnection } from "./googlecloudbeyondcorpappconnectionsv1appconnection";



// GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ListAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnections", elemType: GoogleCloudBeyondcorpAppconnectionsV1AppConnection })
  appConnections?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
