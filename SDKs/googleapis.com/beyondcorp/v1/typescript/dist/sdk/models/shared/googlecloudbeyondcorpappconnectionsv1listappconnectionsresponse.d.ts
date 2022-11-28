import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnection } from "./googlecloudbeyondcorpappconnectionsv1appconnection";
/**
 * Response message for BeyondCorp.ListAppConnections.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse extends SpeakeasyBase {
    appConnections?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection[];
    nextPageToken?: string;
    unreachable?: string[];
}
