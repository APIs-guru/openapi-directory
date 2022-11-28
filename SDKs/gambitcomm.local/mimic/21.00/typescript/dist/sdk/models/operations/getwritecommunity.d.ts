import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWriteCommunityPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetWriteCommunityRequest extends SpeakeasyBase {
    pathParams: GetWriteCommunityPathParams;
}
export declare class GetWriteCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getWriteCommunity200ApplicationJsonString?: string;
}
