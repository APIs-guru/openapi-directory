import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTftpGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpGetArgsPathParams;
}
export declare class ProtocolTftpGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpGetArgs200ApplicationJsonObject?: Map<string, any>;
}
