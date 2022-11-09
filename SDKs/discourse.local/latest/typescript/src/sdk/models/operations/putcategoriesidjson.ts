import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutCategoriesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCategoriesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCategoriesIdJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutCategoriesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putCategoriesIdJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
