import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FetchFieldByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fieldId" })
  fieldId: string;
}


export class FetchFieldByIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class FetchFieldByIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class FetchFieldByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FetchFieldByIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FetchFieldByIdSecurityOption2;
}


export class FetchFieldByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FetchFieldByIdPathParams;

  @Metadata()
  security: FetchFieldByIdSecurity;
}


export class FetchFieldByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  field?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
