import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReadCommunityPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetReadCommunityRequest extends SpeakeasyBase {
    pathParams: GetReadCommunityPathParams;
}
export declare class GetReadCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getReadCommunity200ApplicationJsonString?: string;
}
