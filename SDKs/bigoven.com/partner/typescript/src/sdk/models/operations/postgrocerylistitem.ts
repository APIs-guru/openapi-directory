import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostGrocerylistItemRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostToGroceryListRecipeRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostGrocerylistItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PostGrocerylistItemRequests;
}


export class PostGrocerylistItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelShoppingListLine?: shared.BigOvenModelShoppingListLine;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
