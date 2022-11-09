import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostGetOnlineFriendsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetOnlineFriendsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
