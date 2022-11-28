import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdPathParams extends SpeakeasyBase {
    adId: string;
    campaignId: string;
}
export declare class GetAdSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetAdRequest extends SpeakeasyBase {
    pathParams: GetAdPathParams;
    security: GetAdSecurity;
}
export declare class GetAdResponse extends SpeakeasyBase {
    ad?: shared.Ad;
    contentType: string;
    statusCode: number;
}
