import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGrocerylistItemRequests extends SpeakeasyBase {
    api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;
    api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;
    api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PostGrocerylistItemRequest extends SpeakeasyBase {
    request: PostGrocerylistItemRequests;
}
export declare class PostGrocerylistItemResponse extends SpeakeasyBase {
    bigOvenModelShoppingListLine?: shared.BigOvenModelShoppingListLine;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
