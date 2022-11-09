import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTftpSessionStatusPathParams extends SpeakeasyBase {
    agentNum: number;
    sessionId: string;
}
export declare class ProtocolTftpSessionStatusRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionStatusPathParams;
}
export declare class ProtocolTftpSessionStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionStatus200ApplicationJsonString?: string;
}
