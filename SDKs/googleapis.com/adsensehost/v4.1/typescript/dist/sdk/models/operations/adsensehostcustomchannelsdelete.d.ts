import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostCustomchannelsDeletePathParams extends SpeakeasyBase {
    adClientId: string;
    customChannelId: string;
}
export declare class AdsensehostCustomchannelsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostCustomchannelsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostCustomchannelsDeleteRequest extends SpeakeasyBase {
    pathParams: AdsensehostCustomchannelsDeletePathParams;
    queryParams: AdsensehostCustomchannelsDeleteQueryParams;
    security: AdsensehostCustomchannelsDeleteSecurity;
}
export declare class AdsensehostCustomchannelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
