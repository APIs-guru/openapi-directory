import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroceryListDepartmentRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerDepartmentModel?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerDepartmentModel1?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerDepartmentModel2?: shared.Api2ControllersWebApiGroceryListControllerDepartmentModel;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListDepartmentRequest extends SpeakeasyBase {
  @Metadata()
  request: GroceryListDepartmentRequests;
}


export class GroceryListDepartmentResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Api2GroceryListDepartmentResult })
  api2GroceryListDepartmentResults?: shared.Api2GroceryListDepartmentResult[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
