import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnector";
/**
 * Response message for BeyondCorp.ListAppConnectors.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse extends SpeakeasyBase {
    appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector[];
    nextPageToken?: string;
    unreachable?: string[];
}
