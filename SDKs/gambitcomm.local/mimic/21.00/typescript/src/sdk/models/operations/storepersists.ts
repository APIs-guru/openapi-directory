import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StorePersistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=var" })
  var: string;
}


export class StorePersistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorePersistsPathParams;
}


export class StorePersistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  storePersists200ApplicationJsonString?: string;
}
