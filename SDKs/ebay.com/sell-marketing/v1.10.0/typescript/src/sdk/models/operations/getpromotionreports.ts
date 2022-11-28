import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPromotionReportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promotion_status" })
  promotionStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promotion_type" })
  promotionType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetPromotionReportsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPromotionReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPromotionReportsQueryParams;

  @SpeakeasyMetadata()
  security: GetPromotionReportsSecurity;
}


export class GetPromotionReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  promotionsReportPagedCollection?: shared.PromotionsReportPagedCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
