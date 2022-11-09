import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ChangeEmailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ChangeEmailRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ChangeEmailQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvChangeEmailRequest;

  @Metadata()
  security: ChangeEmailSecurity;
}


export class ChangeEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
