import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryConfiguration } from "./activedirectoryconfiguration";
import { ComputeFarmConfiguration } from "./computefarmconfiguration";
import { LicenseServiceConfiguration } from "./licenseserviceconfiguration";
import { SharedFileSystemConfiguration } from "./sharedfilesystemconfiguration";
/**
 * The configuration of the studio component, based on component type.
**/
export declare class StudioComponentConfiguration extends SpeakeasyBase {
    activeDirectoryConfiguration?: ActiveDirectoryConfiguration;
    computeFarmConfiguration?: ComputeFarmConfiguration;
    licenseServiceConfiguration?: LicenseServiceConfiguration;
    sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
}
