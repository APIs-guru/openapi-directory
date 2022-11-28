import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsDeleteInstallationPathParams extends SpeakeasyBase {
    installationId: number;
}
export declare class AppsDeleteInstallationRequest extends SpeakeasyBase {
    pathParams: AppsDeleteInstallationPathParams;
}
export declare class AppsDeleteInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
