import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails } from "./googlecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails";



// GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ResolveAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnectionDetails", elemType: GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails })
  appConnectionDetails?: GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
