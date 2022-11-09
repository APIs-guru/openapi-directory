import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAdminBadgesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAdminBadgesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAdminBadgesIdJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutAdminBadgesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putAdminBadgesIdJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
