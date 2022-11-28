import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReviewDeletePathParams extends SpeakeasyBase {
    recipeId: number;
    reviewId: number;
}
export declare class ReviewDeleteRequest extends SpeakeasyBase {
    pathParams: ReviewDeletePathParams;
}
export declare class ReviewDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
