import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetOrgInstallationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class AppsGetOrgInstallationHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsGetOrgInstallationRequest extends SpeakeasyBase {
    pathParams: AppsGetOrgInstallationPathParams;
    headers: AppsGetOrgInstallationHeaders;
}
export declare class AppsGetOrgInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    installationGhes2?: shared.InstallationGhes2;
}
