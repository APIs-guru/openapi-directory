import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPromotionSummaryReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;
}


export class GetPromotionSummaryReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPromotionSummaryReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPromotionSummaryReportQueryParams;

  @Metadata()
  security: GetPromotionSummaryReportSecurity;
}


export class GetPromotionSummaryReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  summaryReportResponse?: shared.SummaryReportResponse;
}
