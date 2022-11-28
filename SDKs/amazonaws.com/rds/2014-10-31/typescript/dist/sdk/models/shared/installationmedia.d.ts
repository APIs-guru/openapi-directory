import { SpeakeasyBase } from "../../../internal/utils";
import { InstallationMediaFailureCause } from "./installationmediafailurecause";
/**
 * Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
**/
export declare class InstallationMedia extends SpeakeasyBase {
    customAvailabilityZoneId?: string;
    engine?: string;
    engineInstallationMediaPath?: string;
    engineVersion?: string;
    failureCause?: InstallationMediaFailureCause;
    installationMediaId?: string;
    osInstallationMediaPath?: string;
    status?: string;
}
