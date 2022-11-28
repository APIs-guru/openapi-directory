import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetRepoInstallationPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class AppsGetRepoInstallationRequest extends SpeakeasyBase {
    pathParams: AppsGetRepoInstallationPathParams;
}
export declare class AppsGetRepoInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    installation?: shared.Installation;
}
