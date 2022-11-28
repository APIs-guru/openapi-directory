import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSessionSetParameterPathParams extends SpeakeasyBase {
    agentNum: number;
    parameter: string;
    sessionId: string;
    value: string;
}
export declare class ProtocolTftpSessionSetParameterRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionSetParameterPathParams;
}
export declare class ProtocolTftpSessionSetParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionSetParameter200ApplicationJsonString?: string;
}
