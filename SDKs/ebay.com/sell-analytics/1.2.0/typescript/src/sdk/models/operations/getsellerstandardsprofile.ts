import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSellerStandardsProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=program" })
  program: string;
}


export class GetSellerStandardsProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSellerStandardsProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSellerStandardsProfilePathParams;

  @Metadata()
  security: GetSellerStandardsProfileSecurity;
}


export class GetSellerStandardsProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  standardsProfile?: shared.StandardsProfile;

  @Metadata()
  statusCode: number;
}
