import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoreGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StoreGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoreGetPathParams;
}


export class StoreGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storeGet200ApplicationJsonString?: string;
}
