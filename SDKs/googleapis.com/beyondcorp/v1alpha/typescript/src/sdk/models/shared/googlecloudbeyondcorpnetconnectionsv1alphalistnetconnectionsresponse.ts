import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection } from "./googlecloudbeyondcorpnetconnectionsv1alphanetconnection";


// GoogleCloudBeyondcorpNetconnectionsV1alphaListNetConnectionsResponse
/** 
 * Response message for BeyondCorp.ListNetConnections.
**/
export class GoogleCloudBeyondcorpNetconnectionsV1alphaListNetConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=netConnections", elemType: shared.GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection })
  netConnections?: GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
