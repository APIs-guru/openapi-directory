import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetUserInstallationPathParams extends SpeakeasyBase {
    username: string;
}
export declare class AppsGetUserInstallationRequest extends SpeakeasyBase {
    pathParams: AppsGetUserInstallationPathParams;
}
export declare class AppsGetUserInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    installation?: shared.Installation;
}
