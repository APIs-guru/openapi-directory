import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivateSaveOfferQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class ActivateSaveOfferSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ActivateSaveOfferRequest extends SpeakeasyBase {
    queryParams: ActivateSaveOfferQueryParams;
    request: string;
    security: ActivateSaveOfferSecurity;
}
export declare class ActivateSaveOfferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
