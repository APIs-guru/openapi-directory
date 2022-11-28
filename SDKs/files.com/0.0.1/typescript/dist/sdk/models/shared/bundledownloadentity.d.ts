import { SpeakeasyBase } from "../../../internal/utils";
import { BundleRegistrationEntity } from "./bundleregistrationentity";
export declare enum BundleDownloadEntityDownloadMethodEnum {
    File = "file",
    FullZip = "full_zip"
}
/**
 * List Bundle Downloads
**/
export declare class BundleDownloadEntity extends SpeakeasyBase {
    bundleRegistration?: BundleRegistrationEntity;
    createdAt?: Date;
    downloadMethod?: BundleDownloadEntityDownloadMethodEnum;
    path?: string;
}
