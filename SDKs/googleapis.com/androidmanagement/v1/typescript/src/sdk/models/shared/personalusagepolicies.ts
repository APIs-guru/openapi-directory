import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonalApplicationPolicy } from "./personalapplicationpolicy";


export enum PersonalUsagePoliciesPersonalPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED",
    Blacklist = "BLACKLIST",
    Blocklist = "BLOCKLIST",
    Allowlist = "ALLOWLIST"
}


// PersonalUsagePolicies
/** 
 * Policies controlling personal usage on a company-owned device with a work profile.
**/
export class PersonalUsagePolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountTypesWithManagementDisabled" })
  accountTypesWithManagementDisabled?: string[];

  @SpeakeasyMetadata({ data: "json, name=cameraDisabled" })
  cameraDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxDaysWithWorkOff" })
  maxDaysWithWorkOff?: number;

  @SpeakeasyMetadata({ data: "json, name=personalApplications", elemType: PersonalApplicationPolicy })
  personalApplications?: PersonalApplicationPolicy[];

  @SpeakeasyMetadata({ data: "json, name=personalPlayStoreMode" })
  personalPlayStoreMode?: PersonalUsagePoliciesPersonalPlayStoreModeEnum;

  @SpeakeasyMetadata({ data: "json, name=screenCaptureDisabled" })
  screenCaptureDisabled?: boolean;
}
