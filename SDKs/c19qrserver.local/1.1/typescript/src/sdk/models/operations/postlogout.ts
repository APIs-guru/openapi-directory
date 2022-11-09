import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLogoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
