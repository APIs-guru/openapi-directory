import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroceryListPostRequests extends SpeakeasyBase {
    api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;
    api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;
    api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class GroceryListPostRequest extends SpeakeasyBase {
    request: GroceryListPostRequests;
}
export declare class GroceryListPostResponse extends SpeakeasyBase {
    bigOvenModelShoppingListLine?: shared.BigOvenModelShoppingListLine;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
