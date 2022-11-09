import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifyEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class VerifyEmailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  verifyEmailAuth: shared.SchemeVerifyEmailAuth;
}


export class VerifyEmailRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VerifyEmailQueryParams;

  @Metadata()
  security: VerifyEmailSecurity;
}


export class VerifyEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
