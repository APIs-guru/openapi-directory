import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteServerBlocklistAccountsAccountNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountName" })
  accountName: string;
}


export class DeleteServerBlocklistAccountsAccountNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerBlocklistAccountsAccountNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteServerBlocklistAccountsAccountNamePathParams;

  @SpeakeasyMetadata()
  security: DeleteServerBlocklistAccountsAccountNameSecurity;
}


export class DeleteServerBlocklistAccountsAccountNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
