import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOiddirPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetOiddirRequest extends SpeakeasyBase {
    pathParams: GetOiddirPathParams;
}
export declare class GetOiddirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOiddir200ApplicationJsonString?: string;
}
