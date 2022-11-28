import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingViolationsSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compliance_type" })
  complianceType?: string;
}


export class GetListingViolationsSummaryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId?: string;
}


export class GetListingViolationsSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetListingViolationsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListingViolationsSummaryQueryParams;

  @SpeakeasyMetadata()
  headers: GetListingViolationsSummaryHeaders;

  @SpeakeasyMetadata()
  security: GetListingViolationsSummarySecurity;
}


export class GetListingViolationsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  complianceSummary?: shared.ComplianceSummary;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
