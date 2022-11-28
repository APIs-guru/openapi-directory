import { SpeakeasyBase } from "../../../internal/utils";
import { ClientConnectorService } from "./clientconnectorservice";
/**
 * Message for response to listing ClientConnectorServices.
**/
export declare class ListClientConnectorServicesResponse extends SpeakeasyBase {
    clientConnectorServices?: ClientConnectorService[];
    nextPageToken?: string;
    unreachable?: string[];
}
