import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCIdShowJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCIdShowJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCIdShowJsonPathParams;
}


export class GetCIdShowJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCIdShowJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
