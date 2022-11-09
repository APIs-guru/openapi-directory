import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostCustomchannelsInsertPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsensehostCustomchannelsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostCustomchannelsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostCustomchannelsInsertRequest extends SpeakeasyBase {
    pathParams: AdsensehostCustomchannelsInsertPathParams;
    queryParams: AdsensehostCustomchannelsInsertQueryParams;
    request?: shared.CustomChannel;
    security: AdsensehostCustomchannelsInsertSecurity;
}
export declare class AdsensehostCustomchannelsInsertResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
