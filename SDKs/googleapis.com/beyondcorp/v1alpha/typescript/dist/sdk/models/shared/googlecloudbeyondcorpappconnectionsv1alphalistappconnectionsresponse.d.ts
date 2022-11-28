import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnection";
/**
 * Response message for BeyondCorp.ListAppConnections.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse extends SpeakeasyBase {
    appConnections?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection[];
    nextPageToken?: string;
    unreachable?: string[];
}
