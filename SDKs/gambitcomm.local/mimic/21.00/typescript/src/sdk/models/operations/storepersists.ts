import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StorePersistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StorePersistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorePersistsPathParams;
}


export class StorePersistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storePersists200ApplicationJsonString?: string;
}
