import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdministratorWebTokenSpecManagedConfigurations } from "./administratorwebtokenspecmanagedconfigurations";
import { AdministratorWebTokenSpecPlaySearch } from "./administratorwebtokenspecplaysearch";
import { AdministratorWebTokenSpecPrivateApps } from "./administratorwebtokenspecprivateapps";
import { AdministratorWebTokenSpecStoreBuilder } from "./administratorwebtokenspecstorebuilder";
import { AdministratorWebTokenSpecWebApps } from "./administratorwebtokenspecwebapps";
import { AdministratorWebTokenSpecZeroTouch } from "./administratorwebtokenspeczerotouch";


export enum AdministratorWebTokenSpecPermissionEnum {
    Unknown = "unknown",
    ApproveApps = "approveApps",
    ManageMcm = "manageMcm"
}


// AdministratorWebTokenSpec
/** 
 * Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
**/
export class AdministratorWebTokenSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managedConfigurations" })
  managedConfigurations?: AdministratorWebTokenSpecManagedConfigurations;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: AdministratorWebTokenSpecPermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=playSearch" })
  playSearch?: AdministratorWebTokenSpecPlaySearch;

  @SpeakeasyMetadata({ data: "json, name=privateApps" })
  privateApps?: AdministratorWebTokenSpecPrivateApps;

  @SpeakeasyMetadata({ data: "json, name=storeBuilder" })
  storeBuilder?: AdministratorWebTokenSpecStoreBuilder;

  @SpeakeasyMetadata({ data: "json, name=webApps" })
  webApps?: AdministratorWebTokenSpecWebApps;

  @SpeakeasyMetadata({ data: "json, name=zeroTouch" })
  zeroTouch?: AdministratorWebTokenSpecZeroTouch;
}
