import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActiveDirectoryConfiguration } from "./activedirectoryconfiguration";
import { ComputeFarmConfiguration } from "./computefarmconfiguration";
import { LicenseServiceConfiguration } from "./licenseserviceconfiguration";
import { SharedFileSystemConfiguration } from "./sharedfilesystemconfiguration";


// StudioComponentConfiguration
/** 
 * The configuration of the studio component, based on component type.
**/
export class StudioComponentConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDirectoryConfiguration" })
  activeDirectoryConfiguration?: ActiveDirectoryConfiguration;

  @Metadata({ data: "json, name=computeFarmConfiguration" })
  computeFarmConfiguration?: ComputeFarmConfiguration;

  @Metadata({ data: "json, name=licenseServiceConfiguration" })
  licenseServiceConfiguration?: LicenseServiceConfiguration;

  @Metadata({ data: "json, name=sharedFileSystemConfiguration" })
  sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
}
