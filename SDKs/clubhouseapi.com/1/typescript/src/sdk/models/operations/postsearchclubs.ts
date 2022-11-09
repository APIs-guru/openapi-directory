import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSearchClubsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostSearchClubsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
