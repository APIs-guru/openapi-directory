import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryTokensDeletePathParams extends SpeakeasyBase {
    clientId: string;
    userKey: string;
}
export declare class DirectoryTokensDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryTokensDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryTokensDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryTokensDeletePathParams;
    queryParams: DirectoryTokensDeleteQueryParams;
    security: DirectoryTokensDeleteSecurity;
}
export declare class DirectoryTokensDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
