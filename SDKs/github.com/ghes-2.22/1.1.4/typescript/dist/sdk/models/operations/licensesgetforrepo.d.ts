import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicensesGetForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class LicensesGetForRepoRequest extends SpeakeasyBase {
    pathParams: LicensesGetForRepoPathParams;
}
export declare class LicensesGetForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    licenseContent?: shared.LicenseContent;
}
