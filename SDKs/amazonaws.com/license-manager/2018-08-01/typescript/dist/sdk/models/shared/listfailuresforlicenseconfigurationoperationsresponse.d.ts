import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseOperationFailure } from "./licenseoperationfailure";
export declare class ListFailuresForLicenseConfigurationOperationsResponse extends SpeakeasyBase {
    licenseOperationFailureList?: LicenseOperationFailure[];
    nextToken?: string;
}
