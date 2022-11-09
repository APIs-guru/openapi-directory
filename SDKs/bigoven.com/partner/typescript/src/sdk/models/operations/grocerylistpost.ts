import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroceryListPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest1?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest2?: shared.Api2ControllersWebApiGroceryListControllerPostGroceryListAddLineRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListPostRequest extends SpeakeasyBase {
  @Metadata()
  request: GroceryListPostRequests;
}


export class GroceryListPostResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelShoppingListLine?: shared.BigOvenModelShoppingListLine;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
