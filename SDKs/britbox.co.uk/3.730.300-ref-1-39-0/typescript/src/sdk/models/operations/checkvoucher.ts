import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckVoucherPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class CheckVoucherQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CheckVoucherSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class CheckVoucherRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckVoucherPathParams;

  @Metadata()
  queryParams: CheckVoucherQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvVoucherRequest;

  @Metadata()
  security: CheckVoucherSecurity;
}


export class CheckVoucherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvVoucher?: shared.ItvVoucher;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
