import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryTokensGetPathParams extends SpeakeasyBase {
    clientId: string;
    userKey: string;
}
export declare class DirectoryTokensGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryTokensGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryTokensGetRequest extends SpeakeasyBase {
    pathParams: DirectoryTokensGetPathParams;
    queryParams: DirectoryTokensGetQueryParams;
    security: DirectoryTokensGetSecurity;
}
export declare class DirectoryTokensGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    token?: shared.Token;
}
