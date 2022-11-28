import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpaceTopicsPathParams extends SpeakeasyBase {
    spaceId: string;
}
export declare enum GetSpaceTopicsSearchDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}
export declare class GetSpaceTopicsQueryParams extends SpeakeasyBase {
    numberOfResults?: number;
    searchDirection: GetSpaceTopicsSearchDirectionEnum;
    timestamp?: Date;
}
export declare class GetSpaceTopicsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetSpaceTopicsRequest extends SpeakeasyBase {
    pathParams: GetSpaceTopicsPathParams;
    queryParams: GetSpaceTopicsQueryParams;
    security: GetSpaceTopicsSecurity;
}
export declare class GetSpaceTopicsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceTopics?: any[];
    statusCode: number;
}
