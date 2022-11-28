import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFollowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostFollowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
