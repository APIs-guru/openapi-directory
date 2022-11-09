import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostUrlchannelsInsertPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsensehostUrlchannelsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostUrlchannelsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostUrlchannelsInsertRequest extends SpeakeasyBase {
    pathParams: AdsensehostUrlchannelsInsertPathParams;
    queryParams: AdsensehostUrlchannelsInsertQueryParams;
    request?: shared.UrlChannel;
    security: AdsensehostUrlchannelsInsertSecurity;
}
export declare class AdsensehostUrlchannelsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    urlChannel?: shared.UrlChannel;
}
