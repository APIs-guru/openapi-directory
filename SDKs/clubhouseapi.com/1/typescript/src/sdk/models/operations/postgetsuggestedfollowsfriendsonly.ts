import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetSuggestedFollowsFriendsOnlyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetSuggestedFollowsFriendsOnlyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
