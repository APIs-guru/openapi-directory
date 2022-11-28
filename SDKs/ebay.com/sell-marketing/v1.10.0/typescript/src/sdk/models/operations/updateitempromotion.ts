import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateItemPromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class UpdateItemPromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateItemPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateItemPromotionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ItemPromotion;

  @SpeakeasyMetadata()
  security: UpdateItemPromotionSecurity;
}


export class UpdateItemPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseResponse?: shared.BaseResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
