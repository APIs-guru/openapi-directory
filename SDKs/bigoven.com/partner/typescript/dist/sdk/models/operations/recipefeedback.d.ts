import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeFeedbackPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class RecipeFeedbackRequests extends SpeakeasyBase {
    api2ModelsRecipesFeedbackDto?: shared.Api2ModelsRecipesFeedbackDto;
    api2ModelsRecipesFeedbackDto1?: shared.Api2ModelsRecipesFeedbackDto;
    api2ModelsRecipesFeedbackDto2?: shared.Api2ModelsRecipesFeedbackDto;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class RecipeFeedbackRequest extends SpeakeasyBase {
    pathParams: RecipeFeedbackPathParams;
    request: RecipeFeedbackRequests;
}
export declare class RecipeFeedbackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
