import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSnmpv3ViewAddPathParams extends SpeakeasyBase {
    agentNum: number;
    mask: string;
    subtree: string;
    viewName: string;
    viewType: string;
}
export declare class ProtocolSnmpv3ViewAddRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3ViewAddPathParams;
}
export declare class ProtocolSnmpv3ViewAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3ViewAdd200ApplicationJsonString?: string;
}
