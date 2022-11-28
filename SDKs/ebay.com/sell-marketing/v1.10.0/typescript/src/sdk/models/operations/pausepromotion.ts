import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PausePromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class PausePromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class PausePromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PausePromotionPathParams;

  @SpeakeasyMetadata()
  security: PausePromotionSecurity;
}


export class PausePromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
