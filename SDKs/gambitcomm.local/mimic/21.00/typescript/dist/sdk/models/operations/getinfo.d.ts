import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInfoPathParams extends SpeakeasyBase {
    agentNum: number;
    object: string;
}
export declare class GetInfoRequest extends SpeakeasyBase {
    pathParams: GetInfoPathParams;
}
export declare class GetInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInfo200ApplicationJsonString?: string;
}
