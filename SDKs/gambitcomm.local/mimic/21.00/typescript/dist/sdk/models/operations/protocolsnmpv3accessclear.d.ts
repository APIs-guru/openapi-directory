import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3AccessClearPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3AccessClearRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3AccessClearPathParams;
}
export declare class ProtocolSnmpv3AccessClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3AccessClear200ApplicationJsonString?: string;
}
