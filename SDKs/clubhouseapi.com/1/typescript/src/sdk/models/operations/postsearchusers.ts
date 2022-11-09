import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSearchUsersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostSearchUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
