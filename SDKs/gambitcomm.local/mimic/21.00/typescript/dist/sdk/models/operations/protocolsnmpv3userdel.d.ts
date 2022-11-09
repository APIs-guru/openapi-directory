import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3UserDelPathParams extends SpeakeasyBase {
    agentNum: number;
    userName: string;
}
export declare class ProtocolSnmpv3UserDelRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3UserDelPathParams;
}
export declare class ProtocolSnmpv3UserDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3UserDel200ApplicationJsonString?: string;
}
