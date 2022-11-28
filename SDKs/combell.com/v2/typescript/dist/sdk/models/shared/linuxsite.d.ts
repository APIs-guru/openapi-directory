import { SpeakeasyBase } from "../../../internal/utils";
import { HostHeader } from "./hostheader";
export declare class LinuxSite extends SpeakeasyBase {
    hostHeaders?: HostHeader[];
    http2Enabled?: boolean;
    httpsRedirectEnabled?: boolean;
    name?: string;
    path?: string;
    sslEnabled?: boolean;
}
