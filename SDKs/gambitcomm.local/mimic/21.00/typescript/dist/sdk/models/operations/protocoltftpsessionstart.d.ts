import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTftpSessionStartPathParams extends SpeakeasyBase {
    agentNum: number;
    sessionId: string;
}
export declare class ProtocolTftpSessionStartRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionStartPathParams;
}
export declare class ProtocolTftpSessionStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionStart200ApplicationJsonString?: string;
}
