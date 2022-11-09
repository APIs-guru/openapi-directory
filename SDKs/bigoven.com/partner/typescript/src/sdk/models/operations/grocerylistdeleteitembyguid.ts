import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroceryListDeleteItemByGuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class GroceryListDeleteItemByGuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroceryListDeleteItemByGuidPathParams;
}


export class GroceryListDeleteItemByGuidResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
