import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoreUnsetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreUnsetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoreUnsetPathParams;
}


export class StoreUnsetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storeUnset200ApplicationJsonString?: string;
}
