import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails } from "./googlecloudbeyondcorpappconnectionsv1alpharesolveappconnectionsresponseappconnectiondetails";
/**
 * Response message for BeyondCorp.ResolveAppConnections.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse extends SpeakeasyBase {
    appConnectionDetails?: GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails[];
    nextPageToken?: string;
    unreachable?: string[];
}
