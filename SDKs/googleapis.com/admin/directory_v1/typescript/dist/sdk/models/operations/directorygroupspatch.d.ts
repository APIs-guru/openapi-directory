import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryGroupsPatchPathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryGroupsPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryGroupsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryGroupsPatchPathParams;
    queryParams: DirectoryGroupsPatchQueryParams;
    request?: shared.Group;
    security: DirectoryGroupsPatchSecurity;
}
export declare class DirectoryGroupsPatchResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
