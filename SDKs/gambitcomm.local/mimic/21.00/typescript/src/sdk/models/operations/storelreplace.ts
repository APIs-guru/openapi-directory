import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoreLreplacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreLreplaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoreLreplacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class StoreLreplaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storeLreplace200ApplicationJsonString?: string;
}
