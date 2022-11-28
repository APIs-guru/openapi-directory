import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPromotionsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetPromotionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPromotionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPromotionsQueryParams;

  @SpeakeasyMetadata()
  security: GetPromotionsSecurity;
}


export class GetPromotionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  promotionsPagedCollection?: shared.PromotionsPagedCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
