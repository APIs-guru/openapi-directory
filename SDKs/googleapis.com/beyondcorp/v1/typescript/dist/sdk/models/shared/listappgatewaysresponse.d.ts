import { SpeakeasyBase } from "../../../internal/utils";
import { AppGateway } from "./appgateway";
/**
 * Response message for BeyondCorp.ListAppGateways.
**/
export declare class ListAppGatewaysResponse extends SpeakeasyBase {
    appGateways?: AppGateway[];
    nextPageToken?: string;
    unreachable?: string[];
}
