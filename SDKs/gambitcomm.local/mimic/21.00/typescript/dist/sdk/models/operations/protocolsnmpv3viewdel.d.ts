import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3ViewDelPathParams extends SpeakeasyBase {
    agentNum: number;
    viewName: string;
}
export declare class ProtocolSnmpv3ViewDelRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3ViewDelPathParams;
}
export declare class ProtocolSnmpv3ViewDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3ViewDel200ApplicationJsonString?: string;
}
