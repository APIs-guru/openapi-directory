import { SpeakeasyBase } from "../../../internal/utils";
import { ClientGateway } from "./clientgateway";
/**
 * Message for response to listing ClientGateways.
**/
export declare class ListClientGatewaysResponse extends SpeakeasyBase {
    clientGateways?: ClientGateway[];
    nextPageToken?: string;
    unreachable?: string[];
}
