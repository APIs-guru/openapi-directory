import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensehostUrlchannelsListPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsensehostUrlchannelsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostUrlchannelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostUrlchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsensehostUrlchannelsListPathParams;
    queryParams: AdsensehostUrlchannelsListQueryParams;
    security: AdsensehostUrlchannelsListSecurity;
}
export declare class AdsensehostUrlchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    urlChannels?: shared.UrlChannels;
}
