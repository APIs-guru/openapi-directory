import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroceryListAddRecipeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListRecipeRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListAddRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GroceryListAddRecipeRequests;
}


export class GroceryListAddRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
