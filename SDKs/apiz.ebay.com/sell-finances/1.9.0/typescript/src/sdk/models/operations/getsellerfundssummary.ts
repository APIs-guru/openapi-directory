import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSellerFundsSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSellerFundsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetSellerFundsSummarySecurity;
}


export class GetSellerFundsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sellerFundsSummaryResponse?: shared.SellerFundsSummaryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
