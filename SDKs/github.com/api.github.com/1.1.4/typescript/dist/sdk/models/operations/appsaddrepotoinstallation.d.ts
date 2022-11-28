import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsAddRepoToInstallationPathParams extends SpeakeasyBase {
    installationId: number;
    repositoryId: number;
}
export declare class AppsAddRepoToInstallationRequest extends SpeakeasyBase {
    pathParams: AppsAddRepoToInstallationPathParams;
}
export declare class AppsAddRepoToInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
