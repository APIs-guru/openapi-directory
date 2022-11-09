import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnection";


// GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ListAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnections", elemType: shared.GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection })
  appConnections?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
