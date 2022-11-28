import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetSuggestedClubInvitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetSuggestedClubInvitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
