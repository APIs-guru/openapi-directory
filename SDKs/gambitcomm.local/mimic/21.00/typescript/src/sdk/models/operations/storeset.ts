import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoreSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=persist" })
  persist: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoreSetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: string;
}


export class StoreSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storeSet200ApplicationJsonString?: string;
}
