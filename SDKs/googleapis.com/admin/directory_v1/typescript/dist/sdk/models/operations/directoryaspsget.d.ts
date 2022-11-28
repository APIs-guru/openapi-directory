import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryAspsGetPathParams extends SpeakeasyBase {
    codeId: number;
    userKey: string;
}
export declare class DirectoryAspsGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryAspsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryAspsGetRequest extends SpeakeasyBase {
    pathParams: DirectoryAspsGetPathParams;
    queryParams: DirectoryAspsGetQueryParams;
    security: DirectoryAspsGetSecurity;
}
export declare class DirectoryAspsGetResponse extends SpeakeasyBase {
    asp?: shared.Asp;
    contentType: string;
    statusCode: number;
}
