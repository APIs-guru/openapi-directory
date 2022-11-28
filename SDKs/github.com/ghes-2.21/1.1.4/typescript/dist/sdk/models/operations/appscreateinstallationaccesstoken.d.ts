import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsCreateInstallationAccessTokenPathParams extends SpeakeasyBase {
    installationId: number;
}
export declare class AppsCreateInstallationAccessTokenHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsCreateInstallationAccessTokenRequestBody extends SpeakeasyBase {
    permissions?: shared.AppPermissions;
    repositories?: string[];
    repositoryIds?: number[];
}
export declare class AppsCreateInstallationAccessToken415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsCreateInstallationAccessTokenRequest extends SpeakeasyBase {
    pathParams: AppsCreateInstallationAccessTokenPathParams;
    headers: AppsCreateInstallationAccessTokenHeaders;
    request?: AppsCreateInstallationAccessTokenRequestBody;
}
export declare class AppsCreateInstallationAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appsCreateInstallationAccessToken415ApplicationJsonObject?: AppsCreateInstallationAccessToken415ApplicationJson;
    basicError?: shared.BasicError;
    installationToken?: shared.InstallationToken;
    validationError?: shared.ValidationError;
}
