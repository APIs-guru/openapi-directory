import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecipeRecipeIdReviewPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class GetRecipeRecipeIdReviewRequest extends SpeakeasyBase {
    pathParams: GetRecipeRecipeIdReviewPathParams;
}
export declare class GetRecipeRecipeIdReviewResponse extends SpeakeasyBase {
    bigOvenModelApiReview?: shared.BigOvenModelApiReview;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
