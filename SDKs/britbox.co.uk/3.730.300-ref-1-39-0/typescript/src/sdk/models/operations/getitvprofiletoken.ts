import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItvProfileTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItvProfileTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetItvProfileTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetItvProfileTokenQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvProfileTokenRequest;

  @Metadata()
  security: GetItvProfileTokenSecurity;
}


export class GetItvProfileTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvProfileToken?: shared.ItvProfileToken;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
