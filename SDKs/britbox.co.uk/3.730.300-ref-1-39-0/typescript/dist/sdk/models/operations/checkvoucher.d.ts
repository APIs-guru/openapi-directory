import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckVoucherPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class CheckVoucherQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class CheckVoucherSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class CheckVoucherRequest extends SpeakeasyBase {
    pathParams: CheckVoucherPathParams;
    queryParams: CheckVoucherQueryParams;
    request: shared.ItvVoucherRequest;
    security: CheckVoucherSecurity;
}
export declare class CheckVoucherResponse extends SpeakeasyBase {
    contentType: string;
    itvVoucher?: shared.ItvVoucher;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
