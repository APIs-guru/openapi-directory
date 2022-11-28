import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryConfiguration } from "./activedirectoryconfiguration";
import { ComputeFarmConfiguration } from "./computefarmconfiguration";
import { LicenseServiceConfiguration } from "./licenseserviceconfiguration";
import { SharedFileSystemConfiguration } from "./sharedfilesystemconfiguration";



// StudioComponentConfiguration
/** 
 * The configuration of the studio component, based on component type.
**/
export class StudioComponentConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDirectoryConfiguration" })
  activeDirectoryConfiguration?: ActiveDirectoryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=computeFarmConfiguration" })
  computeFarmConfiguration?: ComputeFarmConfiguration;

  @SpeakeasyMetadata({ data: "json, name=licenseServiceConfiguration" })
  licenseServiceConfiguration?: LicenseServiceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=sharedFileSystemConfiguration" })
  sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
}
