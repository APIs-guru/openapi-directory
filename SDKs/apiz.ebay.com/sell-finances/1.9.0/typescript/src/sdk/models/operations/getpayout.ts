import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayoutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payout_Id" })
  payoutId: string;
}


export class GetPayoutSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPayoutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayoutPathParams;

  @SpeakeasyMetadata()
  security: GetPayoutSecurity;
}


export class GetPayoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payout?: shared.Payout;

  @SpeakeasyMetadata()
  statusCode: number;
}
