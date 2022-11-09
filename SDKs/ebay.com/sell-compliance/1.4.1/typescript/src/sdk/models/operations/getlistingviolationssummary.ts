import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingViolationsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=compliance_type" })
  complianceType?: string;
}


export class GetListingViolationsSummaryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId?: string;
}


export class GetListingViolationsSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetListingViolationsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListingViolationsSummaryQueryParams;

  @Metadata()
  headers: GetListingViolationsSummaryHeaders;

  @Metadata()
  security: GetListingViolationsSummarySecurity;
}


export class GetListingViolationsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  complianceSummary?: shared.ComplianceSummary;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
