import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPromotionReportsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=promotion_status" })
  promotionStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=promotion_type" })
  promotionType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetPromotionReportsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPromotionReportsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPromotionReportsQueryParams;

  @Metadata()
  security: GetPromotionReportsSecurity;
}


export class GetPromotionReportsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  promotionsReportPagedCollection?: shared.PromotionsReportPagedCollection;

  @Metadata()
  statusCode: number;
}
