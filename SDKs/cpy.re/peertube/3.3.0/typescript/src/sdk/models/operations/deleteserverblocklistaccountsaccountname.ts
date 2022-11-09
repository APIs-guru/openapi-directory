import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteServerBlocklistAccountsAccountNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountName" })
  accountName: string;
}


export class DeleteServerBlocklistAccountsAccountNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerBlocklistAccountsAccountNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteServerBlocklistAccountsAccountNamePathParams;

  @Metadata()
  security: DeleteServerBlocklistAccountsAccountNameSecurity;
}


export class DeleteServerBlocklistAccountsAccountNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
