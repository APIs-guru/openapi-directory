import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails } from "./googlecloudbeyondcorpappconnectionsv1alpharesolveappconnectionsresponseappconnectiondetails";


// GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ResolveAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnectionDetails", elemType: shared.GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails })
  appConnectionDetails?: GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
