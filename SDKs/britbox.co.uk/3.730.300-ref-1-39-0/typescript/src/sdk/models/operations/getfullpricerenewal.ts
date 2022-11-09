import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFullPriceRenewalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetFullPriceRenewalSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetFullPriceRenewalRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFullPriceRenewalQueryParams;

  @Metadata()
  security: GetFullPriceRenewalSecurity;
}


export class GetFullPriceRenewalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvSubscriptionFullPriceRenewal?: shared.ItvSubscriptionFullPriceRenewal;

  @Metadata()
  statusCode: number;
}
