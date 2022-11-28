import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetOrgInstallationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class AppsGetOrgInstallationRequest extends SpeakeasyBase {
    pathParams: AppsGetOrgInstallationPathParams;
}
export declare class AppsGetOrgInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    installation?: shared.Installation;
}
