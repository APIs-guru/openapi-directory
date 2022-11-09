import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCharityOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=charity_org_id" })
  charityOrgId: string;
}


export class GetCharityOrgHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetCharityOrgSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCharityOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCharityOrgPathParams;

  @Metadata()
  headers: GetCharityOrgHeaders;

  @Metadata()
  security: GetCharityOrgSecurity;
}


export class GetCharityOrgResponse extends SpeakeasyBase {
  @Metadata()
  charityOrg?: shared.CharityOrg;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
