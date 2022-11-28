import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPubprofilesListPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class AdexchangebuyerPubprofilesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerPubprofilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPubprofilesListRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerPubprofilesListPathParams;
    queryParams: AdexchangebuyerPubprofilesListQueryParams;
    security: AdexchangebuyerPubprofilesListSecurity;
}
export declare class AdexchangebuyerPubprofilesListResponse extends SpeakeasyBase {
    contentType: string;
    getPublisherProfilesByAccountIdResponse?: shared.GetPublisherProfilesByAccountIdResponse;
    statusCode: number;
}
