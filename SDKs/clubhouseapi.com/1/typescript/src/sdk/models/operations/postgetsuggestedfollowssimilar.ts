import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetSuggestedFollowsSimilarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetSuggestedFollowsSimilarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
