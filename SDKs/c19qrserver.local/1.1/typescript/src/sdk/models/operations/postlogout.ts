import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLogoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
