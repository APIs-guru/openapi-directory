import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryAspsDeletePathParams extends SpeakeasyBase {
    codeId: number;
    userKey: string;
}
export declare class DirectoryAspsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryAspsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryAspsDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryAspsDeletePathParams;
    queryParams: DirectoryAspsDeleteQueryParams;
    security: DirectoryAspsDeleteSecurity;
}
export declare class DirectoryAspsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
