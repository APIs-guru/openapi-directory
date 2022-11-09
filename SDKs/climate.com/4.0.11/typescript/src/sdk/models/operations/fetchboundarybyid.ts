import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FetchBoundaryByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=boundaryId" })
  boundaryId: string;
}


export class FetchBoundaryByIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class FetchBoundaryByIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class FetchBoundaryByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FetchBoundaryByIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FetchBoundaryByIdSecurityOption2;
}


export class FetchBoundaryByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FetchBoundaryByIdPathParams;

  @Metadata()
  security: FetchBoundaryByIdSecurity;
}


export class FetchBoundaryByIdResponse extends SpeakeasyBase {
  @Metadata()
  boundary?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
