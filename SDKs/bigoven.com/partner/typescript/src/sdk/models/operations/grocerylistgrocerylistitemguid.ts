import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroceryListGroceryListItemGuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class GroceryListGroceryListItemGuidRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest1?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest2?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListGroceryListItemGuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroceryListGroceryListItemGuidPathParams;

  @SpeakeasyMetadata()
  request: GroceryListGroceryListItemGuidRequests;
}


export class GroceryListGroceryListItemGuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
