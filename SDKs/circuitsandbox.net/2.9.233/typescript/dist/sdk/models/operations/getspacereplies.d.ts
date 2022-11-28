import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpaceRepliesPathParams extends SpeakeasyBase {
    spaceId: string;
    topicId: string;
}
export declare enum GetSpaceRepliesSearchDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}
export declare class GetSpaceRepliesQueryParams extends SpeakeasyBase {
    numberOfResults?: number;
    searchDirection: GetSpaceRepliesSearchDirectionEnum;
    timestamp?: Date;
}
export declare class GetSpaceRepliesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetSpaceRepliesRequest extends SpeakeasyBase {
    pathParams: GetSpaceRepliesPathParams;
    queryParams: GetSpaceRepliesQueryParams;
    security: GetSpaceRepliesSecurity;
}
export declare class GetSpaceRepliesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceReply?: any;
    statusCode: number;
}
