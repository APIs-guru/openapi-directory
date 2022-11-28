import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails } from "./googlecloudbeyondcorpappconnectionsv1alpharesolveappconnectionsresponseappconnectiondetails";



// GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ResolveAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnectionDetails", elemType: GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails })
  appConnectionDetails?: GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
