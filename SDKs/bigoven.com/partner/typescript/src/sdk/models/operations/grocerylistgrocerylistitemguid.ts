import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroceryListGroceryListItemGuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class GroceryListGroceryListItemGuidRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest1?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest2?: shared.Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroceryListGroceryListItemGuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroceryListGroceryListItemGuidPathParams;

  @Metadata()
  request: GroceryListGroceryListItemGuidRequests;
}


export class GroceryListGroceryListItemGuidResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
