import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSaveOfferQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetSaveOfferSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetSaveOfferRequest extends SpeakeasyBase {
    queryParams: GetSaveOfferQueryParams;
    security: GetSaveOfferSecurity;
}
export declare class GetSaveOfferResponse extends SpeakeasyBase {
    contentType: string;
    itvGetDiscountResponse?: shared.ItvGetDiscountResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
