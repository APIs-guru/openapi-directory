import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAdPathParams extends SpeakeasyBase {
    adId: string;
    campaignId: string;
}
export declare class DeleteAdSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteAdRequest extends SpeakeasyBase {
    pathParams: DeleteAdPathParams;
    security: DeleteAdSecurity;
}
export declare class DeleteAdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
