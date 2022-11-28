import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsSuspendInstallationPathParams extends SpeakeasyBase {
    installationId: number;
}
export declare class AppsSuspendInstallationRequest extends SpeakeasyBase {
    pathParams: AppsSuspendInstallationPathParams;
}
export declare class AppsSuspendInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
