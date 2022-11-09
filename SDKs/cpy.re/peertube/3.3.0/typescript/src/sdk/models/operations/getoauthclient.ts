import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOAuthClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  oAuthClient?: any;

  @Metadata()
  statusCode: number;
}
