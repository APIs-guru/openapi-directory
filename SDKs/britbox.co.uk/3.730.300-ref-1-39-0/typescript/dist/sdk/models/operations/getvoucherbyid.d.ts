import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVoucherByIdPathParams extends SpeakeasyBase {
    planId: string;
    voucherId: string;
}
export declare class GetVoucherByIdQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetVoucherByIdSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetVoucherByIdRequest extends SpeakeasyBase {
    pathParams: GetVoucherByIdPathParams;
    queryParams: GetVoucherByIdQueryParams;
    security: GetVoucherByIdSecurity;
}
export declare class GetVoucherByIdResponse extends SpeakeasyBase {
    contentType: string;
    itvVoucher?: shared.ItvVoucher;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
