import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreExistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreExistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoreExistsPathParams;
}


export class StoreExistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storeExists200ApplicationJsonString?: string;
}
