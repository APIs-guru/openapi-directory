import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolTftpSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSetTracePathParams;
}
export declare class ProtocolTftpSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSetTrace200ApplicationJsonString?: string;
}
