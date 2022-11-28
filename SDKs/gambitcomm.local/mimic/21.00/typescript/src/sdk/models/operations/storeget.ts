import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoreGetPathParams;
}


export class StoreGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storeGet200ApplicationJsonString?: string;
}
