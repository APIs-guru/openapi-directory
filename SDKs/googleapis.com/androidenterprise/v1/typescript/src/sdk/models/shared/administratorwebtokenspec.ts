import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdministratorWebTokenSpecManagedConfigurations } from "./administratorwebtokenspecmanagedconfigurations";
import { AdministratorWebTokenSpecPlaySearch } from "./administratorwebtokenspecplaysearch";
import { AdministratorWebTokenSpecPrivateApps } from "./administratorwebtokenspecprivateapps";
import { AdministratorWebTokenSpecStoreBuilder } from "./administratorwebtokenspecstorebuilder";
import { AdministratorWebTokenSpecWebApps } from "./administratorwebtokenspecwebapps";
import { AdministratorWebTokenSpecZeroTouch } from "./administratorwebtokenspeczerotouch";

export enum AdministratorWebTokenSpecPermissionEnum {
    Unknown = "unknown"
,    ApproveApps = "approveApps"
,    ManageMcm = "manageMcm"
}


// AdministratorWebTokenSpec
/** 
 * Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
**/
export class AdministratorWebTokenSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=managedConfigurations" })
  managedConfigurations?: AdministratorWebTokenSpecManagedConfigurations;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: AdministratorWebTokenSpecPermissionEnum[];

  @Metadata({ data: "json, name=playSearch" })
  playSearch?: AdministratorWebTokenSpecPlaySearch;

  @Metadata({ data: "json, name=privateApps" })
  privateApps?: AdministratorWebTokenSpecPrivateApps;

  @Metadata({ data: "json, name=storeBuilder" })
  storeBuilder?: AdministratorWebTokenSpecStoreBuilder;

  @Metadata({ data: "json, name=webApps" })
  webApps?: AdministratorWebTokenSpecWebApps;

  @Metadata({ data: "json, name=zeroTouch" })
  zeroTouch?: AdministratorWebTokenSpecZeroTouch;
}
