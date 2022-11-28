import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetReadCommunityPathParams extends SpeakeasyBase {
    agentNum: number;
    read: string;
}
export declare class SetReadCommunityRequest extends SpeakeasyBase {
    pathParams: SetReadCommunityPathParams;
}
export declare class SetReadCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setReadCommunity200ApplicationJsonString?: string;
}
