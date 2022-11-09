import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTelnetConnectionLogonPathParams extends SpeakeasyBase {
    agentNum: number;
    connectionId: number;
    password: string;
    user: string;
}
export declare class ProtocolTelnetConnectionLogonRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetConnectionLogonPathParams;
}
export declare class ProtocolTelnetConnectionLogonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetConnectionLogon200ApplicationJsonStrings?: string[];
}
