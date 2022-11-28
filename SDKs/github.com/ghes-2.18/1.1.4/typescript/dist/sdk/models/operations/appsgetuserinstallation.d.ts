import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetUserInstallationPathParams extends SpeakeasyBase {
    username: string;
}
export declare class AppsGetUserInstallationHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsGetUserInstallationRequest extends SpeakeasyBase {
    pathParams: AppsGetUserInstallationPathParams;
    headers: AppsGetUserInstallationHeaders;
}
export declare class AppsGetUserInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    installationGhes2?: shared.InstallationGhes2;
}
