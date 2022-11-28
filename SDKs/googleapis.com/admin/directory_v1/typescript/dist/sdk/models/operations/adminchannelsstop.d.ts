import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminChannelsStopQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdminChannelsStopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminChannelsStopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminChannelsStopSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminChannelsStopSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminChannelsStopSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminChannelsStopSecurity extends SpeakeasyBase {
    option1?: AdminChannelsStopSecurityOption1;
    option2?: AdminChannelsStopSecurityOption2;
    option3?: AdminChannelsStopSecurityOption3;
    option4?: AdminChannelsStopSecurityOption4;
    option5?: AdminChannelsStopSecurityOption5;
}
export declare class AdminChannelsStopRequest extends SpeakeasyBase {
    queryParams: AdminChannelsStopQueryParams;
    request?: shared.Channel;
    security: AdminChannelsStopSecurity;
}
export declare class AdminChannelsStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
