import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiOverview
/** 
 * Api Overview
**/
export class ApiOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependabot" })
  dependabot?: string[];

  @SpeakeasyMetadata({ data: "json, name=installed_version" })
  installedVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=packages" })
  packages?: string[];

  @SpeakeasyMetadata({ data: "json, name=verifiable_password_authentication" })
  verifiablePasswordAuthentication: boolean;
}
