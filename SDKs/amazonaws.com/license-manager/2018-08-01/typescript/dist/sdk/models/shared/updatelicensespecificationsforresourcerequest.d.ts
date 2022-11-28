import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseSpecification } from "./licensespecification";
export declare class UpdateLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
    addLicenseSpecifications?: LicenseSpecification[];
    removeLicenseSpecifications?: LicenseSpecification[];
    resourceArn: string;
}
