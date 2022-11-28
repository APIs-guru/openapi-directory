import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetClubsForTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetClubsForTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
