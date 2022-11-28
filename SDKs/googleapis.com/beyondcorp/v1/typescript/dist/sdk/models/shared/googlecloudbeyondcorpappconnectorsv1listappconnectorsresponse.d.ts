import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnector } from "./googlecloudbeyondcorpappconnectorsv1appconnector";
/**
 * Response message for BeyondCorp.ListAppConnectors.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse extends SpeakeasyBase {
    appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1AppConnector[];
    nextPageToken?: string;
    unreachable?: string[];
}
