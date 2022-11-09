import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPromotionsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetPromotionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPromotionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPromotionsQueryParams;

  @Metadata()
  security: GetPromotionsSecurity;
}


export class GetPromotionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  promotionsPagedCollection?: shared.PromotionsPagedCollection;

  @Metadata()
  statusCode: number;
}
