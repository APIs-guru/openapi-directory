import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSearchClubsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostSearchClubsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
