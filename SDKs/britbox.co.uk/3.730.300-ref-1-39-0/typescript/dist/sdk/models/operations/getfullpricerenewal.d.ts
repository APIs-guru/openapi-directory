import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFullPriceRenewalQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetFullPriceRenewalSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetFullPriceRenewalRequest extends SpeakeasyBase {
    queryParams: GetFullPriceRenewalQueryParams;
    security: GetFullPriceRenewalSecurity;
}
export declare class GetFullPriceRenewalResponse extends SpeakeasyBase {
    contentType: string;
    itvSubscriptionFullPriceRenewal?: shared.ItvSubscriptionFullPriceRenewal;
    statusCode: number;
}
