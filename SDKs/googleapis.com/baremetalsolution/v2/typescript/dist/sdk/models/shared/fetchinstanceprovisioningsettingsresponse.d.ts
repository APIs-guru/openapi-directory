import { SpeakeasyBase } from "../../../internal/utils";
import { OsImage } from "./osimage";
/**
 * Response with all provisioning settings.
**/
export declare class FetchInstanceProvisioningSettingsResponse extends SpeakeasyBase {
    images?: OsImage[];
}
