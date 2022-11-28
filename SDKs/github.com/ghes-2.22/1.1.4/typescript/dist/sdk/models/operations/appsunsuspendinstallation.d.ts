import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsUnsuspendInstallationPathParams extends SpeakeasyBase {
    installationId: number;
}
export declare class AppsUnsuspendInstallationRequest extends SpeakeasyBase {
    pathParams: AppsUnsuspendInstallationPathParams;
}
export declare class AppsUnsuspendInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
