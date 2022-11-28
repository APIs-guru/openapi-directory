import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroceryListPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: GroceryListPostRequests;
}


export class GroceryListPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelShoppingListLine?: shared.BigOvenModelShoppingListLine;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
