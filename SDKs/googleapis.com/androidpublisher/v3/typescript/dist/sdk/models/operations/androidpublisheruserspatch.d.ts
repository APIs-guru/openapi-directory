import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherUsersPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AndroidpublisherUsersPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherUsersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherUsersPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherUsersPatchPathParams;
    queryParams: AndroidpublisherUsersPatchQueryParams;
    request?: shared.UserInput;
    security: AndroidpublisherUsersPatchSecurity;
}
export declare class AndroidpublisherUsersPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
