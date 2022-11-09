import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3UsmSaveasPathParams extends SpeakeasyBase {
    agentNum: number;
    filename: string;
}
export declare class ProtocolSnmpv3UsmSaveasRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3UsmSaveasPathParams;
}
export declare class ProtocolSnmpv3UsmSaveasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3UsmSaveas200ApplicationJsonStrings?: string[];
}
