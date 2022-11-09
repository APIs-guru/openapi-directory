import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSellerFundsSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSellerFundsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  security: GetSellerFundsSummarySecurity;
}


export class GetSellerFundsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sellerFundsSummaryResponse?: shared.SellerFundsSummaryResponse;

  @Metadata()
  statusCode: number;
}
