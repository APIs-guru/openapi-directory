import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCharityOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=charity_org_id" })
  charityOrgId: string;
}


export class GetCharityOrgHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetCharityOrgSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCharityOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCharityOrgPathParams;

  @SpeakeasyMetadata()
  headers: GetCharityOrgHeaders;

  @SpeakeasyMetadata()
  security: GetCharityOrgSecurity;
}


export class GetCharityOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  charityOrg?: shared.CharityOrg;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
