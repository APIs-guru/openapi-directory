import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListInstallationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListInstallationsForAuthenticatedUserHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsListInstallationsForAuthenticatedUser200ApplicationJson extends SpeakeasyBase {
    installations: shared.InstallationGhes2[];
    totalCount: number;
}
export declare class AppsListInstallationsForAuthenticatedUser415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsListInstallationsForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: AppsListInstallationsForAuthenticatedUserQueryParams;
    headers: AppsListInstallationsForAuthenticatedUserHeaders;
}
export declare class AppsListInstallationsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    appsListInstallationsForAuthenticatedUser200ApplicationJsonObject?: AppsListInstallationsForAuthenticatedUser200ApplicationJson;
    appsListInstallationsForAuthenticatedUser415ApplicationJsonObject?: AppsListInstallationsForAuthenticatedUser415ApplicationJson;
    basicError?: shared.BasicError;
}
