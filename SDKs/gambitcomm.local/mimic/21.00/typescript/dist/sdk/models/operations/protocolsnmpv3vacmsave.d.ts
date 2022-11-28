import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3VacmSavePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3VacmSaveRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3VacmSavePathParams;
}
export declare class ProtocolSnmpv3VacmSaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3VacmSave200ApplicationJsonStrings?: string[];
}
