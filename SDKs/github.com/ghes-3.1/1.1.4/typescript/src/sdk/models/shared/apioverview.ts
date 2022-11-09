import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiOverview
/** 
 * Api Overview
**/
export class ApiOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependabot" })
  dependabot?: string[];

  @Metadata({ data: "json, name=installed_version" })
  installedVersion?: string;

  @Metadata({ data: "json, name=packages" })
  packages?: string[];

  @Metadata({ data: "json, name=verifiable_password_authentication" })
  verifiablePasswordAuthentication: boolean;
}
