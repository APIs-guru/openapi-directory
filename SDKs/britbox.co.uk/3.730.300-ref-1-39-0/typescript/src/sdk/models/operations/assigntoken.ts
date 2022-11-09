import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssignTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class AssignTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class AssignTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AssignTokenQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvAssignBtTokenRequest;

  @Metadata()
  security: AssignTokenSecurity;
}


export class AssignTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
