import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SetProtocolsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class SetProtocolsRequest extends SpeakeasyBase {
    pathParams: SetProtocolsPathParams;
    request: string[];
}
export declare class SetProtocolsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setProtocols200ApplicationJsonStringIntegers?: number[];
}
