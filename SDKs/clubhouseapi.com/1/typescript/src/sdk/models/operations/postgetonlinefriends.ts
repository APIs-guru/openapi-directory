import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetOnlineFriendsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetOnlineFriendsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
