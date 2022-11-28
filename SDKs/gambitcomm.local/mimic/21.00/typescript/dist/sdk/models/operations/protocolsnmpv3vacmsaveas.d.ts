import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3VacmSaveasPathParams extends SpeakeasyBase {
    agentNum: number;
    filename: string;
}
export declare class ProtocolSnmpv3VacmSaveasRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3VacmSaveasPathParams;
}
export declare class ProtocolSnmpv3VacmSaveasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3VacmSaveas200ApplicationJsonStrings?: string[];
}
