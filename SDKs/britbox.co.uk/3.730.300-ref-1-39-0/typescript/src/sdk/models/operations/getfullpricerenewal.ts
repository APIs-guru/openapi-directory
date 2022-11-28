import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFullPriceRenewalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetFullPriceRenewalSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetFullPriceRenewalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFullPriceRenewalQueryParams;

  @SpeakeasyMetadata()
  security: GetFullPriceRenewalSecurity;
}


export class GetFullPriceRenewalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvSubscriptionFullPriceRenewal?: shared.ItvSubscriptionFullPriceRenewal;

  @SpeakeasyMetadata()
  statusCode: number;
}
