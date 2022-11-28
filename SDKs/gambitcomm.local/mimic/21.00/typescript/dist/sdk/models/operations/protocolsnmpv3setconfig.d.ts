import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3SetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    parameter: string;
    value: string;
}
export declare class ProtocolSnmpv3SetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3SetConfigPathParams;
}
export declare class ProtocolSnmpv3SetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3SetConfig200ApplicationJsonString?: string;
}
