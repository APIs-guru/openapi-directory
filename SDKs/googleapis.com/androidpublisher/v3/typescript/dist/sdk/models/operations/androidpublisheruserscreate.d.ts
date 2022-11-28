import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherUsersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidpublisherUsersCreateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherUsersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherUsersCreateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherUsersCreatePathParams;
    queryParams: AndroidpublisherUsersCreateQueryParams;
    request?: shared.UserInput;
    security: AndroidpublisherUsersCreateSecurity;
}
export declare class AndroidpublisherUsersCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
