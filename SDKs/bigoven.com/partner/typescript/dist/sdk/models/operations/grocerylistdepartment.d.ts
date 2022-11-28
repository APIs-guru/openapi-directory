import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroceryListDepartmentRequests extends SpeakeasyBase {
    api2ControllersWebApiGroceryListControllerDepartmentModel?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;
    api2ControllersWebApiGroceryListControllerDepartmentModel1?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;
    api2ControllersWebApiGroceryListControllerDepartmentModel2?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class GroceryListDepartmentRequest extends SpeakeasyBase {
    request: GroceryListDepartmentRequests;
}
export declare class GroceryListDepartmentResponse extends SpeakeasyBase {
    api2GroceryListDepartmentResults?: shared.Api2GroceryListDepartmentResult[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
