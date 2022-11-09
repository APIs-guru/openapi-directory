import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminBackupsJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostAdminBackupsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminBackupsJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
