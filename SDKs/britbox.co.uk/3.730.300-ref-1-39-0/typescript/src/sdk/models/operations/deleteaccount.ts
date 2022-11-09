import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class DeleteAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class DeleteAccountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteAccountQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvDeleteAccountRequest;

  @Metadata()
  security: DeleteAccountSecurity;
}


export class DeleteAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
