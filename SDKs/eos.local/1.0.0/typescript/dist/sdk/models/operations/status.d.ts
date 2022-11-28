import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatusRequestBody extends SpeakeasyBase {
    endpoint: string;
}
/**
 * Structure holding detailed information about the connection
**/
export declare class Status200ApplicationJsonLastHandshake extends SpeakeasyBase {
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
export declare class Status200ApplicationJson extends SpeakeasyBase {
    connecting?: boolean;
    lastHandshake?: Status200ApplicationJsonLastHandshake;
    peer?: string;
    syncing?: boolean;
}
export declare class StatusRequest extends SpeakeasyBase {
    request?: StatusRequestBody;
}
export declare class StatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    status200ApplicationJsonObject?: Status200ApplicationJson;
}
