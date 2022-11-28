import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetInstallationPathParams extends SpeakeasyBase {
    installationId: number;
}
export declare class AppsGetInstallation415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsGetInstallationRequest extends SpeakeasyBase {
    pathParams: AppsGetInstallationPathParams;
}
export declare class AppsGetInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appsGetInstallation415ApplicationJsonObject?: AppsGetInstallation415ApplicationJson;
    basicError?: shared.BasicError;
    installationGhes2?: shared.InstallationGhes2;
}
