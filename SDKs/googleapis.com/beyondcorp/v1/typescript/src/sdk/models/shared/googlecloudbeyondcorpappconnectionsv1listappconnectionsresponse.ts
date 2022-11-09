import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnection } from "./googlecloudbeyondcorpappconnectionsv1appconnection";


// GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ListAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnections", elemType: shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnection })
  appConnections?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
