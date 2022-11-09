import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostCustomchannelsPatchPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsensehostCustomchannelsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    customChannelId: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostCustomchannelsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostCustomchannelsPatchRequest extends SpeakeasyBase {
    pathParams: AdsensehostCustomchannelsPatchPathParams;
    queryParams: AdsensehostCustomchannelsPatchQueryParams;
    request?: shared.CustomChannel;
    security: AdsensehostCustomchannelsPatchSecurity;
}
export declare class AdsensehostCustomchannelsPatchResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
