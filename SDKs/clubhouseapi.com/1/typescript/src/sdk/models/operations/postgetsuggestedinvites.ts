import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostGetSuggestedInvitesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostGetSuggestedInvitesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
