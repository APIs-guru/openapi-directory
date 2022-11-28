import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAdByListingIdPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class CreateAdByListingIdSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateAdByListingIdRequest extends SpeakeasyBase {
    pathParams: CreateAdByListingIdPathParams;
    request: shared.CreateAdRequest;
    security: CreateAdByListingIdSecurity;
}
export declare class CreateAdByListingIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    createAdByListingId201ApplicationJsonObject?: Map<string, any>;
}
