import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure for the ICE server connection data.
**/
export declare class IceServer extends SpeakeasyBase {
    password?: string;
    ttl?: number;
    uris?: string[];
    username?: string;
}
