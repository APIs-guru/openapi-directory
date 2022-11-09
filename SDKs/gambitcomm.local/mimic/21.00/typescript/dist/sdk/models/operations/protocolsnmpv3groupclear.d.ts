import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3GroupClearPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3GroupClearRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GroupClearPathParams;
}
export declare class ProtocolSnmpv3GroupClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GroupClear200ApplicationJsonString?: string;
}
