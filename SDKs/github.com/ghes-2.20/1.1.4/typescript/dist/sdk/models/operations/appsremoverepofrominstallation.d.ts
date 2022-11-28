import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsRemoveRepoFromInstallationPathParams extends SpeakeasyBase {
    installationId: number;
    repositoryId: number;
}
export declare class AppsRemoveRepoFromInstallationRequest extends SpeakeasyBase {
    pathParams: AppsRemoveRepoFromInstallationPathParams;
}
export declare class AppsRemoveRepoFromInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
