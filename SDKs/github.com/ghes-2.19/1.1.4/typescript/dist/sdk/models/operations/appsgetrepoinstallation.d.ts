import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetRepoInstallationPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class AppsGetRepoInstallationHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsGetRepoInstallationRequest extends SpeakeasyBase {
    pathParams: AppsGetRepoInstallationPathParams;
    headers: AppsGetRepoInstallationHeaders;
}
export declare class AppsGetRepoInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    installationGhes2?: shared.InstallationGhes2;
}
