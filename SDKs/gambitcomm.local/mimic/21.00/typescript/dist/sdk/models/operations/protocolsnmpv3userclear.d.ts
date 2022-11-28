import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3UserClearPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3UserClearRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3UserClearPathParams;
}
export declare class ProtocolSnmpv3UserClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3UserClear200ApplicationJsonString?: string;
}
