import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolIpmiGetAttrPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
}
export declare class ProtocolIpmiGetAttrRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiGetAttrPathParams;
}
export declare class ProtocolIpmiGetAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolIpmiGetAttr200ApplicationJsonString?: string;
}
