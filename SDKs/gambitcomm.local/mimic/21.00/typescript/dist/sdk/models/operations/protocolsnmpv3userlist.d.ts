import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3UserListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3UserListRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3UserListPathParams;
}
export declare class ProtocolSnmpv3UserListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3UserList200ApplicationJsonStrings?: string[];
}
