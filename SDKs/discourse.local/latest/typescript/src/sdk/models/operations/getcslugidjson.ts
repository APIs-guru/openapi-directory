import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCSlugIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetCSlugIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCSlugIdJsonPathParams;
}


export class GetCSlugIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCSlugIdJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
