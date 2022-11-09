import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3GetEnginetimePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3GetEnginetimeRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GetEnginetimePathParams;
}
export declare class ProtocolSnmpv3GetEnginetimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GetEnginetime200ApplicationJsonInt32Integer?: number;
}
