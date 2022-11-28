import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3UsmSavePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3UsmSaveRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3UsmSavePathParams;
}
export declare class ProtocolSnmpv3UsmSaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3UsmSave200ApplicationJsonStrings?: string[];
}
