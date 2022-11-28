import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroceryListDepartmentRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerDepartmentModel?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerDepartmentModel1?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerDepartmentModel2?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListDepartmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GroceryListDepartmentRequests;
}


export class GroceryListDepartmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Api2GroceryListDepartmentResult })
  api2GroceryListDepartmentResults?: shared.Api2GroceryListDepartmentResult[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
