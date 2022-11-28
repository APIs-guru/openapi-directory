import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindSellerStandardsProfilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindSellerStandardsProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: FindSellerStandardsProfilesSecurity;
}


export class FindSellerStandardsProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  findSellerStandardsProfilesResponse?: shared.FindSellerStandardsProfilesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
