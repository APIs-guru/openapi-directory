import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckVoucherPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class CheckVoucherQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CheckVoucherSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class CheckVoucherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckVoucherPathParams;

  @SpeakeasyMetadata()
  queryParams: CheckVoucherQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvVoucherRequest;

  @SpeakeasyMetadata()
  security: CheckVoucherSecurity;
}


export class CheckVoucherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvVoucher?: shared.ItvVoucher;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
