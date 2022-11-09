import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindSellerStandardsProfilesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindSellerStandardsProfilesRequest extends SpeakeasyBase {
  @Metadata()
  security: FindSellerStandardsProfilesSecurity;
}


export class FindSellerStandardsProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  findSellerStandardsProfilesResponse?: shared.FindSellerStandardsProfilesResponse;

  @Metadata()
  statusCode: number;
}
