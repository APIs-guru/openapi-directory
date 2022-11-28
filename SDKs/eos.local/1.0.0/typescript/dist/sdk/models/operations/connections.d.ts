import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Structure holding detailed information about the connection
**/
export declare class Connections200ApplicationJsonLastHandshake extends SpeakeasyBase {
    agent?: string;
    chainId?: string;
    generation?: number;
    headId?: string;
    headNum?: number;
    key?: string;
    lastIrreversibleBlockId?: string;
    lastIrreversibleBlockNum?: number;
    networkVersion?: number;
    nodeId?: string;
    os?: string;
    p2pAddress?: string;
    sig?: string;
    time?: string;
    token?: string;
}
export declare class Connections200ApplicationJson extends SpeakeasyBase {
    connecting?: boolean;
    lastHandshake?: Connections200ApplicationJsonLastHandshake;
    peer?: string;
    syncing?: boolean;
}
export declare class ConnectionsRequest extends SpeakeasyBase {
    request?: Map<string, any>;
}
export declare class ConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    connections200ApplicationJsonObjects?: Connections200ApplicationJson[];
}
