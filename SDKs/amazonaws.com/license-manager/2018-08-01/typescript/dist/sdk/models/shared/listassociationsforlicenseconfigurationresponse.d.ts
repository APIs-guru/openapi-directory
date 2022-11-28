import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfigurationAssociation } from "./licenseconfigurationassociation";
export declare class ListAssociationsForLicenseConfigurationResponse extends SpeakeasyBase {
    licenseConfigurationAssociations?: LicenseConfigurationAssociation[];
    nextToken?: string;
}
