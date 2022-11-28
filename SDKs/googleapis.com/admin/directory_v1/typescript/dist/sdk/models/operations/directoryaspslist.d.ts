import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryAspsListPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryAspsListQueryParams extends SpeakeasyBase {
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
export declare class DirectoryAspsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryAspsListRequest extends SpeakeasyBase {
    pathParams: DirectoryAspsListPathParams;
    queryParams: DirectoryAspsListQueryParams;
    security: DirectoryAspsListSecurity;
}
export declare class DirectoryAspsListResponse extends SpeakeasyBase {
    asps?: shared.Asps;
    contentType: string;
    statusCode: number;
}
