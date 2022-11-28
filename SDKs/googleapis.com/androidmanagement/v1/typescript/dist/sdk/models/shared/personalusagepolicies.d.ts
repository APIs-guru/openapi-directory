import { SpeakeasyBase } from "../../../internal/utils";
import { PersonalApplicationPolicy } from "./personalapplicationpolicy";
export declare enum PersonalUsagePoliciesPersonalPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED",
    Blacklist = "BLACKLIST",
    Blocklist = "BLOCKLIST",
    Allowlist = "ALLOWLIST"
}
/**
 * Policies controlling personal usage on a company-owned device with a work profile.
**/
export declare class PersonalUsagePolicies extends SpeakeasyBase {
    accountTypesWithManagementDisabled?: string[];
    cameraDisabled?: boolean;
    maxDaysWithWorkOff?: number;
    personalApplications?: PersonalApplicationPolicy[];
    personalPlayStoreMode?: PersonalUsagePoliciesPersonalPlayStoreModeEnum;
    screenCaptureDisabled?: boolean;
}
