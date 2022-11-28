import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreUnsetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreUnsetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoreUnsetPathParams;
}


export class StoreUnsetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storeUnset200ApplicationJsonString?: string;
}
