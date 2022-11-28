import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=persist" })
  persist: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoreSetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class StoreSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storeSet200ApplicationJsonString?: string;
}
