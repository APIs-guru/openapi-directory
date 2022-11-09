import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3GroupListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3GroupListRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GroupListPathParams;
}
export declare class ProtocolSnmpv3GroupListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GroupList200ApplicationJsonStrings?: string[];
}
