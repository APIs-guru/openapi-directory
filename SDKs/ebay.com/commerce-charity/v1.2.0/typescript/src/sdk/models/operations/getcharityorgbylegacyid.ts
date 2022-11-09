import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCharityOrgByLegacyIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=legacy_charity_org_id" })
  legacyCharityOrgId: string;
}


export class GetCharityOrgByLegacyIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetCharityOrgByLegacyIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCharityOrgByLegacyIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCharityOrgByLegacyIdQueryParams;

  @Metadata()
  headers: GetCharityOrgByLegacyIdHeaders;

  @Metadata()
  security: GetCharityOrgByLegacyIdSecurity;
}


export class GetCharityOrgByLegacyIdResponse extends SpeakeasyBase {
  @Metadata()
  charityOrg?: shared.CharityOrg;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
