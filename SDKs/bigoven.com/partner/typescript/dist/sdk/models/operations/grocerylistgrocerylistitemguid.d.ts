import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroceryListGroceryListItemGuidPathParams extends SpeakeasyBase {
    guid: string;
}
export declare class GroceryListGroceryListItemGuidRequests extends SpeakeasyBase {
    api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;
    api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest1?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;
    api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest2?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class GroceryListGroceryListItemGuidRequest extends SpeakeasyBase {
    pathParams: GroceryListGroceryListItemGuidPathParams;
    request: GroceryListGroceryListItemGuidRequests;
}
export declare class GroceryListGroceryListItemGuidResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
