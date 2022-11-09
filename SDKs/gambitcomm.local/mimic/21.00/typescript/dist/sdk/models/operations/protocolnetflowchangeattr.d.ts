import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolNetflowChangeAttrPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
    fieldNum: number;
    flowsetUid: number;
    value: string;
}
export declare class ProtocolNetflowChangeAttrRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowChangeAttrPathParams;
}
export declare class ProtocolNetflowChangeAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowChangeAttr200ApplicationJsonString?: string;
}
