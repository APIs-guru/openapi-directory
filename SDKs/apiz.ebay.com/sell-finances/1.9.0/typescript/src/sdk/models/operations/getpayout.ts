import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payout_Id" })
  payoutId: string;
}


export class GetPayoutSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPayoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayoutPathParams;

  @Metadata()
  security: GetPayoutSecurity;
}


export class GetPayoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payout?: shared.Payout;

  @Metadata()
  statusCode: number;
}
