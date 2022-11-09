import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ConfigProxy extends SpeakeasyBase {
    tcpNodelay?: number;
    clientToServer?: string;
    disconnectDelay?: number;
    maxConnects?: number;
    portno?: number;
    preConnect?: string;
    serverToClient?: string;
    target?: string;
    transport?: string;
}
