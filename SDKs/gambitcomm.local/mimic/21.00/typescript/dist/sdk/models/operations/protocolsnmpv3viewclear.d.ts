import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3ViewClearPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3ViewClearRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3ViewClearPathParams;
}
export declare class ProtocolSnmpv3ViewClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3ViewClear200ApplicationJsonString?: string;
}
