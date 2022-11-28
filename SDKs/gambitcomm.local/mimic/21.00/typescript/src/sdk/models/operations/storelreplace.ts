import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreLreplacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreLreplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoreLreplacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class StoreLreplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storeLreplace200ApplicationJsonString?: string;
}
