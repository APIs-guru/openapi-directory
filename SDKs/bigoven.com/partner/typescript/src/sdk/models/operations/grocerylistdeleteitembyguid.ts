import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroceryListDeleteItemByGuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class GroceryListDeleteItemByGuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroceryListDeleteItemByGuidPathParams;
}


export class GroceryListDeleteItemByGuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
