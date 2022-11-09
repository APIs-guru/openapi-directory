import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetOidPathParams extends SpeakeasyBase {
    agentNum: number;
    object: string;
}
export declare class GetOidRequest extends SpeakeasyBase {
    pathParams: GetOidPathParams;
}
export declare class GetOidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOid200ApplicationJsonString?: string;
}
