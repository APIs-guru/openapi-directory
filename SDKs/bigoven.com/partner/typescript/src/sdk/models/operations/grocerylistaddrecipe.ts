import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroceryListAddRecipeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListAddRecipeRequest extends SpeakeasyBase {
  @Metadata()
  request: GroceryListAddRecipeRequests;
}


export class GroceryListAddRecipeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
