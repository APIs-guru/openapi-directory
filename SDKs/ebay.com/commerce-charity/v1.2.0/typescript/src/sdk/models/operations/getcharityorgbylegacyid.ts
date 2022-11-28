import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCharityOrgByLegacyIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=legacy_charity_org_id" })
  legacyCharityOrgId: string;
}


export class GetCharityOrgByLegacyIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetCharityOrgByLegacyIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCharityOrgByLegacyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCharityOrgByLegacyIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetCharityOrgByLegacyIdHeaders;

  @SpeakeasyMetadata()
  security: GetCharityOrgByLegacyIdSecurity;
}


export class GetCharityOrgByLegacyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  charityOrg?: shared.CharityOrg;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
