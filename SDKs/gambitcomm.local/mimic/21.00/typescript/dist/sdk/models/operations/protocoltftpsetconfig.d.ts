import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolTftpSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSetConfigPathParams;
}
export declare class ProtocolTftpSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSetConfig200ApplicationJsonString?: string;
}
