import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3AccessDelPathParams extends SpeakeasyBase {
    accessName: string;
    agentNum: number;
}
export declare class ProtocolSnmpv3AccessDelRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3AccessDelPathParams;
}
export declare class ProtocolSnmpv3AccessDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3AccessDel200ApplicationJsonString?: string;
}
