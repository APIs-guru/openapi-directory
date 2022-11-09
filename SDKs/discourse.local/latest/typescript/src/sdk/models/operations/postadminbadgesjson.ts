import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminBadgesJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostAdminBadgesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminBadgesJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
