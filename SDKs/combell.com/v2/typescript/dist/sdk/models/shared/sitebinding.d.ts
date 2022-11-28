import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A site binding identifies a web domain.
**/
export declare class SiteBinding extends SpeakeasyBase {
    certThumbprint?: string;
    hostName?: string;
    ipAddress?: string;
    port?: number;
    protocol?: string;
    sslEnabled?: boolean;
}
