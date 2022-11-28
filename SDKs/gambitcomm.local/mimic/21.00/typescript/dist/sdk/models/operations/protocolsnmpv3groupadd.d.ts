import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3GroupAddPathParams extends SpeakeasyBase {
    agentNum: number;
    groupName: string;
    securityModel: string;
    securityName: string;
}
export declare class ProtocolSnmpv3GroupAddRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GroupAddPathParams;
}
export declare class ProtocolSnmpv3GroupAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GroupAdd200ApplicationJsonString?: string;
}
