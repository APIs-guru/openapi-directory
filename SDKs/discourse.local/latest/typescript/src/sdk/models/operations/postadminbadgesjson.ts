import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminBadgesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostAdminBadgesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdminBadgesJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
