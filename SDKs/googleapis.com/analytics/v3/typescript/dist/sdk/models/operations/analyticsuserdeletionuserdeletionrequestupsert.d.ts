import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsUserDeletionUserDeletionRequestUpsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsUserDeletionUserDeletionRequestUpsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsUserDeletionUserDeletionRequestUpsertRequest extends SpeakeasyBase {
    queryParams: AnalyticsUserDeletionUserDeletionRequestUpsertQueryParams;
    request?: shared.UserDeletionRequestInput;
    security: AnalyticsUserDeletionUserDeletionRequestUpsertSecurity;
}
export declare class AnalyticsUserDeletionUserDeletionRequestUpsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userDeletionRequest?: shared.UserDeletionRequest;
}
