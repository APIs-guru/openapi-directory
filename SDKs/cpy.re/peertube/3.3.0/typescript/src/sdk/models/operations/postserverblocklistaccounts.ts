import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostServerBlocklistAccountsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName: string;
}


export class PostServerBlocklistAccountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerBlocklistAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServerBlocklistAccountsRequestBody;

  @Metadata()
  security: PostServerBlocklistAccountsSecurity;
}


export class PostServerBlocklistAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
