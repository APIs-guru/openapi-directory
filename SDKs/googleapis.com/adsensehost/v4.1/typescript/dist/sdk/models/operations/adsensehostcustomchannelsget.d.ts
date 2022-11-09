import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostCustomchannelsGetPathParams extends SpeakeasyBase {
    adClientId: string;
    customChannelId: string;
}
export declare class AdsensehostCustomchannelsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostCustomchannelsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostCustomchannelsGetRequest extends SpeakeasyBase {
    pathParams: AdsensehostCustomchannelsGetPathParams;
    queryParams: AdsensehostCustomchannelsGetQueryParams;
    security: AdsensehostCustomchannelsGetSecurity;
}
export declare class AdsensehostCustomchannelsGetResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
