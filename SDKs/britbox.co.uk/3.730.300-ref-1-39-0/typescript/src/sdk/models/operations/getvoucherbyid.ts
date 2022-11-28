import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVoucherByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=planId" })
  planId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=voucherId" })
  voucherId: string;
}


export class GetVoucherByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetVoucherByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetVoucherByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVoucherByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVoucherByIdQueryParams;

  @SpeakeasyMetadata()
  security: GetVoucherByIdSecurity;
}


export class GetVoucherByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvVoucher?: shared.ItvVoucher;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
