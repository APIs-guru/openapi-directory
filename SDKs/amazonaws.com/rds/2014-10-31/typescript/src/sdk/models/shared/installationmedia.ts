import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstallationMediaFailureCause } from "./installationmediafailurecause";



// InstallationMedia
/** 
 * Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
**/
export class InstallationMedia extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customAvailabilityZoneId?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineInstallationMediaPath?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  failureCause?: InstallationMediaFailureCause;

  @SpeakeasyMetadata()
  installationMediaId?: string;

  @SpeakeasyMetadata()
  osInstallationMediaPath?: string;

  @SpeakeasyMetadata()
  status?: string;
}
