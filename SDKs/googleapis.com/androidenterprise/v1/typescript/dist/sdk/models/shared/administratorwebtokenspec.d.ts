import { SpeakeasyBase } from "../../../internal/utils";
import { AdministratorWebTokenSpecManagedConfigurations } from "./administratorwebtokenspecmanagedconfigurations";
import { AdministratorWebTokenSpecPlaySearch } from "./administratorwebtokenspecplaysearch";
import { AdministratorWebTokenSpecPrivateApps } from "./administratorwebtokenspecprivateapps";
import { AdministratorWebTokenSpecStoreBuilder } from "./administratorwebtokenspecstorebuilder";
import { AdministratorWebTokenSpecWebApps } from "./administratorwebtokenspecwebapps";
import { AdministratorWebTokenSpecZeroTouch } from "./administratorwebtokenspeczerotouch";
export declare enum AdministratorWebTokenSpecPermissionEnum {
    Unknown = "unknown",
    ApproveApps = "approveApps",
    ManageMcm = "manageMcm"
}
/**
 * Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
**/
export declare class AdministratorWebTokenSpec extends SpeakeasyBase {
    managedConfigurations?: AdministratorWebTokenSpecManagedConfigurations;
    parent?: string;
    permission?: AdministratorWebTokenSpecPermissionEnum[];
    playSearch?: AdministratorWebTokenSpecPlaySearch;
    privateApps?: AdministratorWebTokenSpecPrivateApps;
    storeBuilder?: AdministratorWebTokenSpecStoreBuilder;
    webApps?: AdministratorWebTokenSpecWebApps;
    zeroTouch?: AdministratorWebTokenSpecZeroTouch;
}
