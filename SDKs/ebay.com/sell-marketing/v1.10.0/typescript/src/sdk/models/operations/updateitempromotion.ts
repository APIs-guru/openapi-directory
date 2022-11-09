import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateItemPromotionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class UpdateItemPromotionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateItemPromotionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateItemPromotionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ItemPromotion;

  @Metadata()
  security: UpdateItemPromotionSecurity;
}


export class UpdateItemPromotionResponse extends SpeakeasyBase {
  @Metadata()
  baseResponse?: shared.BaseResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
