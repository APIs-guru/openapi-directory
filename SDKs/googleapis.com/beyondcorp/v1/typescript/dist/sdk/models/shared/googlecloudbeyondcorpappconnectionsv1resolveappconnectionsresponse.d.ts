import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails } from "./googlecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails";
/**
 * Response message for BeyondCorp.ResolveAppConnections.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse extends SpeakeasyBase {
    appConnectionDetails?: GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails[];
    nextPageToken?: string;
    unreachable?: string[];
}
