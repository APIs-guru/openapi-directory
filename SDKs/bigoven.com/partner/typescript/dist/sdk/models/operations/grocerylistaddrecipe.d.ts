import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroceryListAddRecipeRequests extends SpeakeasyBase {
    api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;
    api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;
    api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class GroceryListAddRecipeRequest extends SpeakeasyBase {
    request: GroceryListAddRecipeRequests;
}
export declare class GroceryListAddRecipeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
