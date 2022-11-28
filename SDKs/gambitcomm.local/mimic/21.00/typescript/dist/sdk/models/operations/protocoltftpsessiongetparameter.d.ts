import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSessionGetParameterPathParams extends SpeakeasyBase {
    agentNum: number;
    parameter: string;
    sessionId: string;
}
export declare class ProtocolTftpSessionGetParameterRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionGetParameterPathParams;
}
export declare class ProtocolTftpSessionGetParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionGetParameter200ApplicationJsonString?: string;
}
