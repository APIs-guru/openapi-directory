import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetMibPathParams extends SpeakeasyBase {
    agentNum: number;
    object: string;
}
export declare class GetMibRequest extends SpeakeasyBase {
    pathParams: GetMibPathParams;
}
export declare class GetMibResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMib200ApplicationJsonString?: string;
}
