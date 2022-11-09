import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostUrlchannelsDeletePathParams extends SpeakeasyBase {
    adClientId: string;
    urlChannelId: string;
}
export declare class AdsensehostUrlchannelsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostUrlchannelsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostUrlchannelsDeleteRequest extends SpeakeasyBase {
    pathParams: AdsensehostUrlchannelsDeletePathParams;
    queryParams: AdsensehostUrlchannelsDeleteQueryParams;
    security: AdsensehostUrlchannelsDeleteSecurity;
}
export declare class AdsensehostUrlchannelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    urlChannel?: shared.UrlChannel;
}
