import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSellerStandardsProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=program" })
  program: string;
}


export class GetSellerStandardsProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSellerStandardsProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSellerStandardsProfilePathParams;

  @SpeakeasyMetadata()
  security: GetSellerStandardsProfileSecurity;
}


export class GetSellerStandardsProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  standardsProfile?: shared.StandardsProfile;

  @SpeakeasyMetadata()
  statusCode: number;
}
