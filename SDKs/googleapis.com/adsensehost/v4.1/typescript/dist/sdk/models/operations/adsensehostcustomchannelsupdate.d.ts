import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensehostCustomchannelsUpdatePathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsensehostCustomchannelsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostCustomchannelsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostCustomchannelsUpdateRequest extends SpeakeasyBase {
    pathParams: AdsensehostCustomchannelsUpdatePathParams;
    queryParams: AdsensehostCustomchannelsUpdateQueryParams;
    request?: shared.CustomChannel;
    security: AdsensehostCustomchannelsUpdateSecurity;
}
export declare class AdsensehostCustomchannelsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
