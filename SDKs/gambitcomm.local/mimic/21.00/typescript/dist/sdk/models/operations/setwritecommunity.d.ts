import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetWriteCommunityPathParams extends SpeakeasyBase {
    agentNum: number;
    write: string;
}
export declare class SetWriteCommunityRequest extends SpeakeasyBase {
    pathParams: SetWriteCommunityPathParams;
}
export declare class SetWriteCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setWriteCommunity200ApplicationJsonString?: string;
}
