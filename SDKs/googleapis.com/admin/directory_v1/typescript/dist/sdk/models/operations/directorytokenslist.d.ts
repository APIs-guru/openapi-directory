import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryTokensListPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryTokensListQueryParams extends SpeakeasyBase {
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
export declare class DirectoryTokensListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryTokensListRequest extends SpeakeasyBase {
    pathParams: DirectoryTokensListPathParams;
    queryParams: DirectoryTokensListQueryParams;
    security: DirectoryTokensListSecurity;
}
export declare class DirectoryTokensListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tokens?: shared.Tokens;
}
