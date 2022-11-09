import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestEmailVerificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class RequestEmailVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class RequestEmailVerificationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestEmailVerificationQueryParams;

  @Metadata()
  security: RequestEmailVerificationSecurity;
}


export class RequestEmailVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
