import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3AccessListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3AccessListRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3AccessListPathParams;
}
export declare class ProtocolSnmpv3AccessListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3AccessList200ApplicationJsonStrings?: string[];
}
