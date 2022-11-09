import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGrocerylistItemRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostGrocerylistItemRequest extends SpeakeasyBase {
  @Metadata()
  request: PostGrocerylistItemRequests;
}


export class PostGrocerylistItemResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelShoppingListLine?: shared.BigOvenModelShoppingListLine;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
