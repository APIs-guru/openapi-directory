import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTodGettimePathParams extends SpeakeasyBase {
    agentNum: number;
    numRetries: number;
    portNum: number;
    scriptName: string;
    serverAddr: string;
    timeSec: number;
}
export declare class ProtocolTodGettimeRequest extends SpeakeasyBase {
    pathParams: ProtocolTodGettimePathParams;
}
export declare class ProtocolTodGettimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTodGettime200ApplicationJsonStrings?: string[];
}
