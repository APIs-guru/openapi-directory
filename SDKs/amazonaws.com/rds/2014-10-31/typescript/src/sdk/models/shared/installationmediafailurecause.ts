import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstallationMediaFailureCause
/** 
 * Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
**/
export class InstallationMediaFailureCause extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
