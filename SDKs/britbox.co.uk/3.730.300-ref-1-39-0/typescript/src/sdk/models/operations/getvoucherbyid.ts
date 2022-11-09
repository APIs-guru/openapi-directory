import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVoucherByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=planId" })
  planId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=voucherId" })
  voucherId: string;
}


export class GetVoucherByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetVoucherByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetVoucherByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVoucherByIdPathParams;

  @Metadata()
  queryParams: GetVoucherByIdQueryParams;

  @Metadata()
  security: GetVoucherByIdSecurity;
}


export class GetVoucherByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvVoucher?: shared.ItvVoucher;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
