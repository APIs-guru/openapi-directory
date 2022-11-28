import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPromotionSummaryReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;
}


export class GetPromotionSummaryReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPromotionSummaryReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPromotionSummaryReportQueryParams;

  @SpeakeasyMetadata()
  security: GetPromotionSummaryReportSecurity;
}


export class GetPromotionSummaryReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  summaryReportResponse?: shared.SummaryReportResponse;
}
