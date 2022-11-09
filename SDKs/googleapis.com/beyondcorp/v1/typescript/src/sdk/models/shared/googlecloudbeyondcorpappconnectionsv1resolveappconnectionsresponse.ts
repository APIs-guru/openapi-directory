import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails } from "./googlecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails";


// GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse
/** 
 * Response message for BeyondCorp.ResolveAppConnections.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnectionDetails", elemType: shared.GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails })
  appConnectionDetails?: GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
