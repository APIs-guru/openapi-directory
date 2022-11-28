import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLikesPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetLikesQueryParams extends SpeakeasyBase {
    numberOfResults?: number;
    searchPointer?: string;
}
export declare class GetLikesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetLikesRequest extends SpeakeasyBase {
    pathParams: GetLikesPathParams;
    queryParams: GetLikesQueryParams;
    security: GetLikesSecurity;
}
export declare class GetLikesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantsLikeResult?: any;
    statusCode: number;
}
