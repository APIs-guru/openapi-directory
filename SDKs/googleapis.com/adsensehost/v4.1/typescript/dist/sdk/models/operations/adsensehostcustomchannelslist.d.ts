import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensehostCustomchannelsListPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsensehostCustomchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsensehostCustomchannelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostCustomchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsensehostCustomchannelsListPathParams;
    queryParams: AdsensehostCustomchannelsListQueryParams;
    security: AdsensehostCustomchannelsListSecurity;
}
export declare class AdsensehostCustomchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    customChannels?: shared.CustomChannels;
    statusCode: number;
}
