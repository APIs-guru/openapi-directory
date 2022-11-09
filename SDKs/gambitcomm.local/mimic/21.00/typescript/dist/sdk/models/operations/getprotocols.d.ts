import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetProtocolsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetProtocolsRequest extends SpeakeasyBase {
    pathParams: GetProtocolsPathParams;
}
export declare class GetProtocolsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getProtocols200ApplicationJsonStrings?: string[];
}
