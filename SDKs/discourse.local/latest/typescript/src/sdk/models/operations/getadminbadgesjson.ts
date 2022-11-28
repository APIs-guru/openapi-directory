import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminBadgesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAdminBadgesJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
