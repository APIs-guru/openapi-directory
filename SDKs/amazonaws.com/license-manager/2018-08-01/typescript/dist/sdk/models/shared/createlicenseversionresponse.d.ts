import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseStatusEnum } from "./licensestatusenum";
export declare class CreateLicenseVersionResponse extends SpeakeasyBase {
    licenseArn?: string;
    status?: LicenseStatusEnum;
    version?: string;
}
