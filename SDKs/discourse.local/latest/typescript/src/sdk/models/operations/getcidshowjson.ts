import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCIdShowJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCIdShowJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCIdShowJsonPathParams;
}


export class GetCIdShowJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCIdShowJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
