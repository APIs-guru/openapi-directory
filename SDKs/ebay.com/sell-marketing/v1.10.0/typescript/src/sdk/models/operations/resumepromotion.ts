import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResumePromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class ResumePromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class ResumePromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResumePromotionPathParams;

  @SpeakeasyMetadata()
  security: ResumePromotionSecurity;
}


export class ResumePromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
