import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3ViewListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3ViewListRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3ViewListPathParams;
}
export declare class ProtocolSnmpv3ViewListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3ViewList200ApplicationJsonStrings?: string[];
}
