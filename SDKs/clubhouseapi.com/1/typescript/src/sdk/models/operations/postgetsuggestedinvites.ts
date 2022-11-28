import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetSuggestedInvitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetSuggestedInvitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
