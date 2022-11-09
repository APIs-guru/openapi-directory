import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoreExistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreExistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoreExistsPathParams;
}


export class StoreExistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storeExists200ApplicationJsonString?: string;
}
